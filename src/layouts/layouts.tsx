import LeftSideBar from "../components/LeftSideBar";
import PageContent from "../components/PageContent";

const layouts = () => {
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

      {/* Right drawer - containing secondary content like notifications list etc.. */}
      {/* <RightSidebar /> */}

      {/** Notification layout container */}
      {/* <NotificationContainer /> */}

      {/* Modal layout container */}
      {/* <ModalLayout /> */}
    </>
  );
};

export default layouts;
