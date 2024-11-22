import FaceFrownIcon from "@heroicons/react/24/solid/FaceFrownIcon";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="hero h-screen bg-base-200">
      <div className="hero-content text-accent text-center">
        <div className="max-w-md">
          <FaceFrownIcon className="h-48 w-48 inline-block" />
          <h1 className="text-5xl  font-bold">404 - Not Found</h1>
          <h1 className="text-2xl mt-6 text-blue-600 underline  font-bold">
            <Link to="/panel">Go To Panel</Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Page404;
