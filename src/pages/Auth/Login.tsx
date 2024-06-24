import { useFormik } from "formik";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";

import InputText from "../../components/InputText";
import supabase from "../../utils/supapase";
import LandingIntro from "./LoginIntro";

const initialValues = {
  email: "nedapornejad@gmail.com",
  password: "	nedapornejad",
};

const loginUser = async (values: { email: string; password: string }) => {
  const { email, password } = values;
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

const Login = () => {
  const navigate = useNavigate();

  const mutation = useMutation(loginUser, {
    onSuccess: () => {
      navigate("/app", { replace: true });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const form = useFormik({
    validate(values) {
      const errors: { email?: string; password?: string } = {};

      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      if (!values.password) {
        errors.password = "Required";
      }

      return errors;
    },
    initialValues,
    onSubmit: (values) => {
      console.log(values);

      mutation.mutate(values);
    },
  });

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-5xl shadow-xl">
        <div className="grid md:grid-cols-2 grid-cols-1 bg-base-100 rounded-xl">
          <div className="">
            <LandingIntro />
          </div>
          <div className="py-24 px-10">
            <h2 className="text-2xl font-semibold mb-2 text-center">Login</h2>
            <form onSubmit={form.handleSubmit}>
              <div className="mb-4">
                <InputText
                  name="email"
                  value={form.values.email}
                  changeHandle={form.handleChange}
                  type="email"
                  containerStyle="mt-4"
                  labelTitle="Email Id"
                />
                <p className="mt-2 text-red-300 text-sm">
                  {form.touched.email ? form.errors.email : null}
                </p>

                <InputText
                  name="password"
                  value={form.values.password}
                  changeHandle={form.handleChange}
                  type="password"
                  containerStyle="mt-4"
                  labelTitle="Password"
                />
                <p className="mt-2 text-red-300 text-sm">
                  {form.touched.password ? form.errors.password : null}
                </p>
              </div>

              <div className="text-right text-primary">
                <Link to="/forget-password">
                  <span className="text-sm inline-block hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                    Forgot Password?
                  </span>
                </Link>
              </div>

              <button
                disabled={mutation.isLoading}
                type="submit"
                className="btn mt-2 w-full btn-primary"
              >
                {mutation.isLoading ? "Loading..." : "Login"}
              </button>

              <div className="text-center mt-4">
                Don&apos;t have an account yet?{" "}
                <Link to="/register">
                  <span className="inline-block hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
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
