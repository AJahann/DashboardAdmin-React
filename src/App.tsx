import { useRoutes } from "react-router-dom";

import mainRoutes from "./routes";

const App = () => {
  const router = useRoutes(mainRoutes);
  return router;
};

export default App;
