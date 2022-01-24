import React from "react";
import About from "./components/About";
import Blog from "./components/Blog";
import HeroPage from "./components/HeroPage";
import Icons from "./components/Icons";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import "./css/utilities.css"

// import { BrowserRouter as Router, Switch } from "react-router-dom";


const App = () => {
  return (
 <div className="home">
   <header className="hero">
     <NavBar/>
     <HeroPage/>
   </header>
   <main>
     <Icons/>
     <About/>
     <Projects/>
     <Blog/>
   </main>
 </div>
  );
};

export default App;
