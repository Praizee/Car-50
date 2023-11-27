import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./Layout";
import HomePage from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import NotFoundPage from "./Pages/404 Page/NotFoundPage";
import './App.css'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        {/* This is the catch-all route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default App
