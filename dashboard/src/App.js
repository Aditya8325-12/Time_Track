import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import SingnUp from "./Pages/SingnUp";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Header from "./Componets/Header";
import Footer from "./Componets/Footer";

function App() {
  const location = useLocation();
  // const setdata = { name: "aditya", pass: "password" };
  // localStorage.setItem("data", JSON.stringify(setdata));
  const showheader =
    location.pathname !== "/login" && location.pathname !== "/signup";
  const data = localStorage.getItem("data");

  return (
    <div className="w-full font-serif ">
      {showheader && data && <Header />}
      <Routes>
        <Route path="/" element={data ? <Home /> : <Login />} />
        <Route path="/signup" element={<SingnUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {showheader && data && <Footer />}
    </div>
  );
}

export default App;
