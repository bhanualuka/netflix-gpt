import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);

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

      <form className=" w-3/12 p-12 absolute bg-black my-36 mx-auto right-0 left-0  text-white rounded-lg bg-opacity-80 ">
        <h1 className="font-bold text-3xl py-4 ">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="p-4 my-4 w-full rounded-md  bg-black  border border-white  "
          />
        )}

        <input
          type="email"
          name="usermail"
          placeholder="Email Address"
          className="p-4 my-4 w-full rounded-md  bg-black  border border-white  "
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="p-4 my-4 w-full  rounded-md  bg-black   border border-white "
        />

        <button className="p-4 my-6 bg-red-700 w-full rounded-lg font-bold text-lg ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="cursor-pointer " onClick={handleSignForm}>
          {isSignInForm
            ? "New to Netflix ? Sign up Now "
            : "Already Registerd SingIn Now.."}
        </p>
      </form>
    </div>
  );
};

export default Login;
