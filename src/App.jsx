import React from "react";


import "./App.css";
import Header from "./Header";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Service from './Service'
import Socialmesia from "./Socialmesia";




import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Socialmesia" component={Socialmesia} />
        <Route exact path="/Service" component={Service} />
      
       

        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
