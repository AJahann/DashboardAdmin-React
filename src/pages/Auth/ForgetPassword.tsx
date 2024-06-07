import CheckCircleIcon from "@heroicons/react/24/solid/CheckCircleIcon";
import { useState } from "react";

import InputText from "../../components/InputText";
import LandingIntro from "./LoginIntro";

const ForgetPassword = () => {
  const [linkSent] = useState(false);
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
              Forgot Password
            </h2>

            {linkSent ? (
              <>
                <div className="text-center mt-8">
                  <CheckCircleIcon className="inline-block w-32 text-success" />
                </div>
                <p className="my-4 text-xl font-bold text-center">Link Sent</p>
                <p className="mt-4 mb-8 font-semibold text-center">
                  Check your email to reset password
                </p>
                <div className="text-center mt-4">
                  <a href="/">
                    <button className="btn btn-block btn-primary ">
                      Login
                    </button>
                  </a>
                </div>
              </>
            ) : null}

            {!linkSent && (
              <>
                <p className="my-8 font-semibold text-center">
                  We will send password reset link on your email Id
                </p>
                <form>
                  <div className="mb-4">
                    <InputText
                      type="emailId"
                      containerStyle="mt-4"
                      labelTitle="Email Id"
                    />
                  </div>

                  {/* <ErrorText styleClass="mt-12">{errorMessage}</ErrorText> */}
                  <button
                    type="submit"
                    className={`btn mt-2 w-full btn-primary ${loading ? " loading" : ""}`}
                  >
                    Send Reset Link
                  </button>

                  <div className="text-center mt-4">
                    Don&apos;t have an account yet?{" "}
                    <a href="/">
                      <button className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                        Register
                      </button>
                    </a>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
