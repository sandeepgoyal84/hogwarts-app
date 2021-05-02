import React from "react";
import "./App.css";
import TodayRoaster from "src/modules/todayRoaster/todayRoaster";
import StudentRoaster from "src/modules/studentRoaster/studentRoaster";
import TeacherRoaster from "src/modules/teacherRoaster/teacherRoaster";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Hogwarts University</h1>
      </div>

      <Router>
        <div id="menu-outer">
          <div className="table">
            <ul id="horizontal-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/studentChart">Student Chart</Link>
              </li>
              <li>
                <Link to="/teacherChart">Teacher Chart</Link>
              </li>
            </ul>
          </div>
        </div>
        <Route path="/" exact component={TodayRoaster} />
        <Route path="/studentChart" exact component={StudentRoaster} />
        <Route path="/teacherChart" exact component={TeacherRoaster} />
      </Router>
    </div>
  );
}

export default App;
