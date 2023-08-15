import React from "react";
import {
  BrowserRouter as Router } from "react-router-dom";
import Nav from "./Components/nav";

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
      </div>
    </Router>
  );
};

export default App;
