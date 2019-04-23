import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./components/layouts/Landing";
import NotFound from "./components/layouts/NotFound";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
