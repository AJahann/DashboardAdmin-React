import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

import LeftSideBar from "../components/LeftSideBar";
import PageContent from "../components/PageContent";
import RightSidebar from "../components/RightSideBar";
import supabase from "../utils/supapase";

const Layouts = () => {
  const navigate = useNavigate();

  const query = useQuery({
    queryKey: ["auth"],
    queryFn: () => supabase.auth.getSession(),
    select(data) {
      if (!data.data.session) {
        throw new Error("user in not logged in");
      }
    },
  });

  if (query.isLoading) {
    return "Loading...";
  }

  if (query.error) {
    return navigate("/login", { replace: true });
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

      {/* <ModalLayout /> */}
    </>
  );
};

export default Layouts;
