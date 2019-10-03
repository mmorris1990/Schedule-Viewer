import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainView from "./pages/MainView";
import WeekView from "./pages/WeekView";
import Tasks from "./pages/Tasks";
import Login from "./pages/Login";
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/schedule" component={MainView} />
          <Route exact path="/weekSchedule" component={WeekView} />
          <Route exact path="/tasks" component={Tasks} />
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
