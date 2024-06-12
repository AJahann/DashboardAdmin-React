import LeftSideBar from "../components/LeftSideBar";
import PageContent from "../components/PageContent";
import RightSidebar from "../components/RightSideBar";

const Layouts = () => {
  return (
    <>
      {/* Left drawer - containing page content and side bar (always open) */}
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

      {/* Modal layout container */}
      {/* <ModalLayout /> */}
    </>
  );
};

export default Layouts;
