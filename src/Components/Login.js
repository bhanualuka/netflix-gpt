import { useRef, useState } from "react";
import Header from "./Header";
import {
  EmailValidate,
  PasswordValidate,
  UsernameValidate,
} from "../utils/checkValidate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
// import { use } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/reduxtoolkit/slices/userSlice";
import { BG_URL } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);
  const [errorUserName, setErrorUserName] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleValidate = () => {
    const emailverify = EmailValidate(email.current.value);
    const passwordverify = PasswordValidate(password.current.value);
    const nameverify = !isSignInForm && UsernameValidate(name.current.value);
    setErrorEmail(emailverify);
    setErrorPassword(passwordverify);
    setErrorUserName(nameverify);
    if (emailverify || passwordverify) return;

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // User Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/143590098?v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Uer Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };

  const handleSignForm = () => {
    setSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img src={BG_URL} alt="back-img" />
      </div>

      <form
        className=" w-3/12 p-12 absolute bg-black my-36 mx-auto right-0 left-0  text-white rounded-lg bg-opacity-80 "
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="font-bold text-3xl py-4 ">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            name="username"
            placeholder="Username"
            ref={name}
            className="p-4 my-4 w-full rounded-md  bg-black  border border-white  "
          />
        )}{" "}
        {errorUserName && (
          <p className="py-3 text-red-900 font-bold text-lg ">
            {" "}
            {errorUserName}{" "}
          </p>
        )}
        <input
          type="email"
          name="usermail"
          placeholder="Email Address"
          ref={email}
          className="p-4 my-4 w-full rounded-md  bg-black  border border-white  "
        />
        {errorEmail && (
          <p className="py-3 text-red-900 font-bold text-lg "> {errorEmail} </p>
        )}
        <input
          type="password"
          name="password"
          placeholder="Password"
          ref={password}
          className="p-4 my-4 w-full  rounded-md  bg-black   border border-white "
        />
        {errorPassword && (
          <p className="py-3 text-red-900 font-bold text-lg ">
            {" "}
            {errorPassword}{" "}
          </p>
        )}
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg font-bold text-lg "
          onClick={handleValidate}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="font-bold text-red-900">{errorMessage}</p>
        <p className="cursor-pointer " onClick={handleSignForm}>
          {isSignInForm
            ? "New to Netflix ? Sign up Now "
            : "Already Registerd SingIn Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
