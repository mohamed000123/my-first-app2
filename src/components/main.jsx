import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import NotFound from "../pages/notFound";
import Complain from "../components/about/complain";
import { NavBar } from "../components/nav";
import Feedback from "../components/about/feedback";
import Products from "../pages/Products";
import Product from "../pages/product";
const Main = () => {
    const navigate =useNavigate()
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
        navigate("/login")
    }
  });
  return (
    <>
      <NavBar />
      {/* <Router> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route element={<Complain />} path="/about/complain"></Route>
            <Route element={<Feedback />} path="/about/feedback"></Route>
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      {/* </Router> */}
    </>
  );
};

export default Main;
