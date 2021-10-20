import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Switch, Route, Redirect  } from "react-router-dom"
import Resume from "./Resume"
import About from "./About"
import Contact from "./Contact"
import Projects from "./Projects"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"







const  App=() => {
  return (
  <>
  <Navbar />
  <hr />
  <Switch>
    <Route exact path="/" component= {About} />
    <Route exact path="/resume" component= {Resume} />
    <Route exact path="/contact" component= {Contact} />
    <Route exact path="/projects" component= {Projects} />
    <Redirect to ="/" />
  
  </Switch>
  <Footer />
  </>
  );
}

export default App;
