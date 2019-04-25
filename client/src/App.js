import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./components/layouts/Landing";
import NotFound from "./components/layouts/NotFound";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/layouts/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={Landing} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
