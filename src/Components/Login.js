import { useRef, useState } from "react";
import Header from "./Header";
import {
  EmailValidate,
  PasswordValidate,
  UsernameValidate,
} from "../utils/checkValidate";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);
  const [errorUserName, setErrorUserName] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleValidate = () => {
    const emailverify = EmailValidate(email.current.value);
    const passwordverify = PasswordValidate(password.current.value);
    const nameverify = UsernameValidate(name.current.value);
    setErrorEmail(emailverify);
    setErrorPassword(passwordverify);
    setErrorUserName(nameverify);

    console.log("jai Sai master");
  };

  const handleSignForm = () => {
    setSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ce449112-3294-449a-b8d3-c4e1fdd7cff5/web/IN-en-20241202-TRIFECTA-perspective_0acfb303-6291-4ad1-806f-dda785f6295a_large.jpg"
          alt="back-img"
        />
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
