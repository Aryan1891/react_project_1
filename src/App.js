import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter,RouterProvider ,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

const AppLayout = () => (
  <>
    <Header />
    <Outlet/>
    <Footer />
  </>
);
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/about",
        element:<About />,
      },
      {
        path:"/contact",
        element:<Contact />,
      },
    ],
    errorElement: <Error/>,

  },
 
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// 
root.render(<RouterProvider router={appRouter} />);
 