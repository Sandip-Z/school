import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Components/Router";

function App() {
  return (
    <>
      <Router>
        <Routes />
      </Router>
    </>
  );
}

export default App;
