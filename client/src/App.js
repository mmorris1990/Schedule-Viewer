import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/Login";
import MainView from "./pages/MainView";
import WeekView from "./pages/WeekView";
import ProjectView from "./pages/ProjectView"
import Tasks from "./pages/Tasks";
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/schedule" component={MainView} />
          <Route exact path="/weekSchedule" component={WeekView} />
          <Route exact path="/projects" component={ProjectView} />
          <Route exact path="/tasks" component={Tasks} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
