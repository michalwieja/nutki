import React from "react";
import Header from "./Header";
import Main from "./Main";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Main />
        <footer>stopka</footer>
      </div>
    </Router>
  );
}

export default App;
