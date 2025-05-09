import { createBrowserRouter } from "react-router-dom";
import SingleTaskPage from "./pages/SingleTaskPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import EditTaskPage from "./pages/EditTaskPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "task/:id",
    element: <SingleTaskPage />,
  },
  {
    path: "task/:id/edit",
    element: <EditTaskPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default Routes;
