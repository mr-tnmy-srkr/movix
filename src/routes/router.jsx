import { createBrowserRouter } from "react-router-dom";
import Details from "../pages/Details/Details";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import SearchResult from "../pages/SearchResult/SearchResult";
import Explore from "../pages/Explore/Explore";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: ":mediaType/:id",
        element: <Details />,
      },
      {
        path: "search/:query",
        element: <SearchResult />,
      },
      {
        path: "explore/:mediaType",
        element: <Explore />,
      },
    ],
  },
]);
export default router;
