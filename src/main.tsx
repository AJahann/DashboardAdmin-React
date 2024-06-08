import "./assets/css/global.css";

import React from "react";
import ReactDOM from "react-dom/client";

import Layouts from "./layouts/layouts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layouts />
  </React.StrictMode>,
);
