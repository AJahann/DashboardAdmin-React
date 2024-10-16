import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

import LeftSideBar from "../components/LeftSideBar";
import PageContent from "../components/PageContent";
import RightSidebar from "../components/RightSideBar";
import supabase from "../utils/supapase";
import ModalLayout from "./ModalLayout";

const Layouts = () => {
  const navigate = useNavigate();

  const { isLoading, error } = useQuery({
    queryKey: ["auth"],
    queryFn: () => supabase.auth.getSession(),
    select(data) {
      if (!data.data.session) {
        throw new Error("user in not logged in");
      }
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    navigate("/login", { replace: true });
    return <></>;
  }

  return (
    <>
      <div className="drawer  lg:drawer-open">
        <input
          id="left-sidebar-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <PageContent />
        <LeftSideBar />
      </div>

      <RightSidebar />

      <ModalLayout />
    </>
  );
};

export default Layouts;
