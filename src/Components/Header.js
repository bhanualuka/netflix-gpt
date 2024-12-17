import React, { useEffect, useState } from "react";
import netflixlogo from "../assets/netflix-log.png";
import netflixuserlogo from "../assets/netflix-user.jpg";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUSer } from "../utils/reduxtoolkit/slices/userSlice";
import { addGptSearch } from "../utils/reduxtoolkit/slices/GptSlice";
import { SUPPORT_LANG } from "../utils/constants";
import { addChangeName } from "../utils/reduxtoolkit/slices/configLang";

const Header = () => {
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const toogelGptSearch = useSelector(
    (store) => store.gptSearch.toogoleGptSearch
  );
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

  // mutlilanguage  handling
  const handleLang = (e) => {
    dispatch(addChangeName(e.target.value));
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
          {toogelGptSearch && (
            <select
              className="p-2 m-6 rounded-md text-white  bg-gray-900"
              onChange={(e) => {
                handleLang(e);
              }}
            >
              {SUPPORT_LANG.map((lang) => (
                <option value={lang.identifier}>{lang.name}</option>
              ))}
            </select>
          )}

          <button
            onClick={() => {
              dispatch(addGptSearch());
            }}
            className="text-white  bg-purple-800  w-28 px-5  h-10 mt-6 mr-8 rounded-lg "
          >
            {toogelGptSearch ? "Home" : "GptSearch"}
          </button>
          <img
            className="w-12 h-8 mr-3 mt-7 rounded-lg "
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
            className=" bg-red-600 rounded-md mt-6  w-24 h-9 border border-red-600 text-white font-bold"
          >
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
