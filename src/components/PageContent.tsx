import Dashboard from "../pages/Home/Dashboard";
import Leads from "../pages/Home/Leads";
import Transactions from "../pages/Home/Transactions";
import Analytics from "../pages/Home/Analytics";
import Header from "./Header";
import Calendar from "../pages/Home/Calendar";

const routes = [
  {
    path: "/dashboard", // the url
    component: "Dashboard", // view rendered
  },
  {
    path: "/welcome", // the url
    component: "Welcome", // view rendered
  },
  {
    path: "/leads",
    component: "Leads",
  },
  {
    path: "/settings-team",
    component: "Team",
  },
  {
    path: "/calendar",
    component: "Calendar",
  },
  {
    path: "/transactions",
    component: "Transactions",
  },
  {
    path: "/settings-profile",
    component: "ProfileSettings",
  },
  {
    path: "/settings-billing",
    component: "Bills",
  },
  {
    path: "/getting-started",
    component: "GettingStarted",
  },
  {
    path: "/features",
    component: "DocFeatures",
  },
  {
    path: "/components",
    component: "DocComponents",
  },
  {
    path: "/integration",
    component: "Integration",
  },
  {
    path: "/charts",
    component: "Charts",
  },
  {
    path: "/404",
    component: "Page404",
  },
  {
    path: "/blank",
    component: "Blank",
  },
];

const PageContent = () => {
  return (
    <div className="drawer-content flex flex-col ">
      <Header />
      <main className="flex-1 overflow-y-auto md:pt-4 pt-4 px-6  bg-base-200">
        {/* <Dashboard /> */}
        {/* <Leads /> */}
        {/* <Transactions /> */}
        {/* <Analytics /> */}
        <Calendar />
        {/* <Routes> */}
        {/* {routes.map((route) => {
          //   return (
          //     <Route
          //       key={route.name}
          //       exact
          //       path={`${route.path}`}
          //       element={<route.component />}
          //     />
          //   );
          return <p key={route.path}>{route.path}</p>;
        })} */}

        {/* Redirecting unknown url to 404 page */}
        {/* <Route path="*" element={<Page404 />} /> */}
        {/* </Routes> */}
        <div className="h-16" />
      </main>
    </div>
  );
};

export default PageContent;
