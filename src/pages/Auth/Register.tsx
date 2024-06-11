import { useState } from "react";
import { Link } from "react-router-dom";

import InputText from "../../components/InputText";
import LandingIntro from "./LoginIntro";

const Register = () => {
  const [loading] = useState(false);
  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-5xl  shadow-xl">
        <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
          <div className="">
            <LandingIntro />
          </div>
          <div className="py-24 px-10">
            <h2 className="text-2xl font-semibold mb-2 text-center">
              Register
            </h2>
            <form>
              <div className="mb-4">
                <InputText containerStyle="mt-4" labelTitle="Name" />

                <InputText containerStyle="mt-4" labelTitle="Email Id" />

                <InputText
                  type="password"
                  containerStyle="mt-4"
                  labelTitle="Password"
                />
              </div>

              {/* <ErrorText styleClass="mt-8">{errorMessage}</ErrorText> */}
              <button
                type="submit"
                className={`btn mt-2 w-full btn-primary ${loading ? " loading" : ""}`}
              >
                Register
              </button>

              <div className="text-center mt-4">
                Already have an account?{" "}
                <Link to="/login">
                  <span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                    Login
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

export default Register;
