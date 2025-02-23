import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import Moreservices from "./components/Moreservices";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Services />
              <Gallery />
              <Contact />
            </>
          }
        />
        <Route path="/Moreservices" element={<Moreservices />} />
      </Routes>
    </div>
  );
}

export default App;
