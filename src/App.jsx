import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Head from "./components/Head/Head";
import Home from "./pages/Home/Home";
import Services from "./pages/Servic/Services";
import Speciality from "./pages/Speciality/Speciality";
import Blog from "./pages/Blog/Blog";
import AboutUs from "./pages/Aboutus/AboutUs";
import Contact from "./pages/Contact/Contact";

import './App.css'

const App = () => {
  return (
    <Router>
      <div>
        <Head />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/speciality" element={<Speciality />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;