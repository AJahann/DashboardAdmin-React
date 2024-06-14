import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

import InputText from "../../components/InputText";
import supabase from "../../utils/supapase";
import LandingIntro from "./LoginIntro";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const Register = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string().required("This field is required"),
    email: Yup.string()
      .email("Please check Your Email")
      .required("This field is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("This field is required"),
  });

  const form = useFormik({
    validationSchema,
    initialValues,
    onSubmit: async (values) => {
      const req = await supabase.auth.signUp({
        options: {
          data: {
            name: values.name,
          },
        },
        email: values.email,
        password: values.password,
      });

      if (req.error) {
        console.log(req.error);
      } else {
        navigate("/app", { replace: true });
      }

      setTimeout(() => {
        form.setSubmitting(false);
      }, 5000);
    },
  });

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
            <form onSubmit={form.handleSubmit}>
              <div className="mb-4">
                <InputText
                  value={form.values.name}
                  changeHandle={form.handleChange}
                  name="name"
                  type="text"
                  containerStyle="mt-4"
                  labelTitle="Name"
                />
                <p className="mt-2 text-red-300 text-sm">
                  {form.touched.name ? form.errors.name : null}
                </p>

                <InputText
                  changeHandle={form.handleChange}
                  value={form.values.email}
                  name="email"
                  type="email"
                  containerStyle="mt-4"
                  labelTitle="Email Id"
                />

                <p className="mt-2 text-red-300 text-sm">
                  {form.touched.email ? form.errors.email : null}
                </p>

                <InputText
                  value={form.values.password}
                  changeHandle={form.handleChange}
                  name="password"
                  type="password"
                  containerStyle="mt-4"
                  labelTitle="Password"
                />

                <p className="mt-2 text-red-300 text-sm">
                  {form.touched.password ? form.errors.password : null}
                </p>
              </div>

              <button
                disabled={form.isSubmitting}
                type="submit"
                className="btn mt-2 w-full btn-primary"
              >
                {form.isSubmitting ? "Loading..." : "Register"}
              </button>

              <div className="text-center mt-4">
                Already have an account?{" "}
                <Link to="/login">
                  <span className="inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
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
