import React from "react";
import HeroPage from "./components/HeroPage";
import NavBar from "./components/NavBar";
import "./css/utilities.css"

// import { BrowserRouter as Router, Switch } from "react-router-dom";


const App = () => {
  return (
 <div className="home">
   <header className="hero">
     <NavBar/>
     <HeroPage/>
   </header>
 </div>
  );
};

export default App;
