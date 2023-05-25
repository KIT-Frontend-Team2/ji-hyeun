import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/main";
import Layout from "../components/Layout";
import Pagy from "../pages/components/pagination/pagination";
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
      //     path: '/todo/:todoId',
      //     element: <TodoPage/>
      // },
    ],
  },
]);

/* 기본값 */
export default router;
