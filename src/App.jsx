import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import ContactUs from "./Components/ContactUs/ContactUs";
import Coursespage from "./Components/CoursesPages/Coursespage";
import ServicePage from "./Components/ServicesPages/ServicePage";
import Aboutpage from "./Components/AboutUs/AbPage";
import Footer from "./Components/Footer/Footer";
import CourseInnerDetail from "./Components/CoursesPages/CourseInnerDetail";
import CourseData from "./assets/CourseData";
import CourseInerPage from "./Components/CoursesPages/CourseInerPage";
function App() {
  const {routes}=CourseData;
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/courses" element={<Coursespage />} />
        <Route path="/aboutus" element={<Aboutpage />} />
        <Route path={`/courses/:id`} element={<CourseInerPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
