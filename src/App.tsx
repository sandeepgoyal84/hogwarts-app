import React from "react";
import "./App.css";
import { TodayRoaster } from "./modules/todayRoaster/todayRoaster";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={TodayRoaster} />
      </Switch>
    </div>
  );
}

export default App;
