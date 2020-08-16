import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./pages/components/Navbar";
import Footer from "./pages/components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Locations from "./pages/Locations";

function App() {
  const [windowMode, setWindowMode] = useState("");

  function handleWindowResize() {
    if (window.innerWidth < 718) {
      setWindowMode("mobile");
    } else if (window.innerWidth < 1145) {
      setWindowMode("tablet");
    } else {
      setWindowMode("desktop");
    }
  }

  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", () => {
      handleWindowResize();
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <Router>
      <div className="container">
        <Navbar windowMode={windowMode} />
        <Route
          path="/"
          exact
          component={() => <Home windowMode={windowMode} />}
        />
        <Route
          path="/about"
          exact
          component={() => <About windowMode={windowMode} />}
        />
        <Route
          path="/careers"
          exact
          component={() => <Careers windowMode={windowMode} />}
        />
        <Route
          path="/locations"
          exact
          component={() => <Locations windowMode={windowMode} />}
        />
        <Footer windowMode={windowMode} />
      </div>
    </Router>
  );
}

export default App;
