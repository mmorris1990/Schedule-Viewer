import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Views from "./pages/Views";
import Tasks from "./pages/Tasks";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Views />
          <Route exact path="/" component={Views} />
          <Route exact path="/tasks" component={Tasks} />
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
