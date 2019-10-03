import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import MainView from "./pages/MainView";
import WeekView from "./pages/WeekView";
import Tasks from "./pages/Tasks";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/schedule" component={MainView} />
          <Route exact path="/weekSchedule" component={WeekView} />
          <Route exact path="/tasks" component={Tasks} />
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
