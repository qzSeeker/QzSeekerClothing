import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Layout from "./Components/LayOut/Layout.jsx";
import Home from "./Components/Home/Home.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="" element={<Layout />}>
    <Route path="/" element={<Home />} />
  </Route>
));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
