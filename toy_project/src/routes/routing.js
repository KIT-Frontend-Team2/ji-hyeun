import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/main";
import Layout from "../components/Layout";
import Pagy from "../pages/components/pagination/pagination";
// import TimelineList from "../pages/main/timeline/timline-list";
// import AddTimeline from "../pages/main/timeline/add-list";
// import OneTimeline from "../pages/main/timeline/one-timeline";
// export const router = createBrowserRouter([])
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/pagination",
        element: <Pagy />,
      },
      // {
      //     path: '/Timeline/:todoId',
      //     element: <MainPage/>
      // },
      // {
      //     path: '/todo/:todoId',
      //     element: <TodoPage/>
      // },
    ],
  },
]);

/* 기본값 */
export default router;
