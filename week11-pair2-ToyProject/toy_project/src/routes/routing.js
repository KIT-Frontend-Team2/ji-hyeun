import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/main";
import Layout from "../components/Layout";
import Pagy from "../pages/components/pagination/pagination";
// <<<<<<< HEAD
import Slider from "../pages/components/carousel/slider";


// =======
// import TimelineList from "../pages/main/timeline/timline-list";
// import AddTimeline from "../pages/main/timeline/add-list";
// import OneTimeline from "../pages/main/timeline/one-timeline";
// >>>>>>> d5210c3aebbe787799260105281db5ee4a8a17b8
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
// <<<<<<< HEAD
      {
          path: "/Slider",
          element: <Slider />,
      },
// =======
      // {
      //     path: '/Timeline/:todoId',
      //     element: <MainPage/>
      // },
      // {
      //     path: '/todo/:todoId',
      //     element: <TodoPage/>
      // },
// >>>>>>> d5210c3aebbe787799260105281db5ee4a8a17b8
    ],
  },
]);

/* 기본값 */
export default router;
