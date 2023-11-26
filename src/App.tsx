import React, { useEffect } from "react";
// import logo from './logo.svg';

import "./App.css";
import Header from "./components/Home";
import Banner from "./components/AboutMe";
import Skills from "./components/Skills";
// import Services from './components/ProgSkills';
import Work from "./components/Clubs";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Clubs from "./components/Clubs";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <NavBar />
      <Home />
      <AboutMe />
      <Skills />
      {/* <Banner/>
   <Nav/>
 */}

      <Clubs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
