import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Authentication from "./screens/Authentication";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/authentication" Component={Authentication} />
        <Route path="/" Component={Home} />
        <Route />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
