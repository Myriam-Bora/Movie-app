import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./routes/Navigation";
import Details from "./routes/Details";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/about" exact={true} component={About}></Route>
      <Route path="/details" exact={true} component={Details}></Route>
    </HashRouter>
  );
}

export default App;
