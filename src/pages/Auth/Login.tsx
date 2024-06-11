import { useState } from "react";
import { Link } from "react-router-dom";

import InputText from "../../components/InputText";
import LandingIntro from "./LoginIntro";

const Login = () => {
  const [loading] = useState(false);
  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-5xl  shadow-xl">
        <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
          <div className="">{<LandingIntro />}</div>
          <div className="py-24 px-10">
            <h2 className="text-2xl font-semibold mb-2 text-center">Login</h2>
            <form>
              <div className="mb-4">
                <InputText
                  type="emailId"
                  containerStyle="mt-4"
                  labelTitle="Email Id"
                />

                <InputText
                  type="password"
                  containerStyle="mt-4"
                  labelTitle="Password"
                />
              </div>

              <div className="text-right text-primary">
                <Link to="/forget-password">
                  <span className="text-sm  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                    Forgot Password?
                  </span>
                </Link>
              </div>

              {/* <ErrorText styleClass="mt-8">{errorMessage}</ErrorText> */}
              <button
                type="submit"
                className={`btn mt-2 w-full btn-primary ${loading ? " loading" : ""}`}
              >
                Login
              </button>

              <div className="text-center mt-4">
                Don&apos;t have an account yet?{" "}
                <Link to="/register">
                  <span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                    Register
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
