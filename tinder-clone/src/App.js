import React from "react";
import Header from "./Header";
import TinderCards from "./TinderCards"
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <switch>
          <Route path="/chat">
            <h1>I am chatpage</h1>
          </Route>
          <Route path="/">
            <TinderCards />
          </Route>
        </switch>
      </Router>
    </div>
  );
}
export default App;
