import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HooksPage from "./pages/Hooks";
import StatesPage from "./pages/State";
import DetailPage from "./pages/Detail";
import Q2 from "./hooks/1.basic/q2";
import { useRef, useState } from "react";

function App() {

  const router = createBrowserRouter([
    
    {
      path: "/",
      element: <HooksPage />,
    },
    {
      path: "/state",
      element: <StatesPage />,
    },
    {
      path: "/state/detail/:productNumber",
      element: <DetailPage />,
    },
  ]);


  return (
    <div className="App">
      <RouterProvider router={router} />
      <Q2/>
    </div>

  );
}

export default App;
