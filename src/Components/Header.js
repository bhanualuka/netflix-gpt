import React, { useEffect, useState } from "react";
import netflixlogo from "../assets/netflix-log.png";
import netflixuserlogo from "../assets/netflix-user.jpg";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUSer } from "../utils/reduxtoolkit/slices/userSlice";

const Header = () => {
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUSer());
        navigate("/");
      }

      setIsAuthChecked(true);
    });

    // Unsubscribing the Component when it unmounts

    return () => unSubscribe();
  }, []);

  if (!isAuthChecked) {
    return null;
  }

  return (
    <div className=" flex justify-between w-screen pl-20  bg-gradient-to-b from-black absolute z-10 ">
      <img className="w-52" src={netflixlogo} alt="backgroundImage" />

      {user?.uid && (
        <div
          className="flex  mr-6
      "
        >
          <img
            className="w-12 h-8 mr-3 mt-8 rounded-lg "
            src={netflixuserlogo}
            alt="usericon"
          />
          {/* {user?.photoURL ? (
            <img
              className="w-12 h-8 mr-3 mt-8 rounded-lg "
              src={user.photoURL}
              alt="usericon"
            />
          ) : (
            <img
              className="w-12 h-8 mr-3 mt-8 rounded-lg "
              src={netflixuserlogo}
              alt="usericon"
            />
          )} */}
          <button
            onClick={handleSignOut}
            className=" bg-red-600 rounded-md mt-7  w-24 h-9 border border-red-600 text-white font-bold"
          >
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
