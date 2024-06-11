import { Outlet } from "react-router-dom";

import Header from "./Header";

const PageContent = () => {
  return (
    <div className="drawer-content flex flex-col ">
      <Header />
      <main className="flex-1 overflow-y-auto md:pt-4 pt-4 px-6  bg-base-200">
        <Outlet />
        <div className="h-16" />
      </main>
    </div>
  );
};

export default PageContent;
