import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import HomePage from "./pages/HomePage"

function App() {
  return (
    <div className="App">
      <Router>
          <Link to="/bonjour/1">Lien 1</Link>
          <Link to="/bonjour/2">Lien 2</Link>
          <Link to="/bonjour/3">Lien 3</Link>
        <Switch>
            <Route exact path="/">
                <HomePage/> {/*<h1>HomePage</h1>*/}
            </Route>
          <Route path="/bonjour/1">
            <h1>Salut</h1>
          </Route>
            <Route path="/bonjour/2">
                <h1>à</h1>
            </Route>
            <Route path="/bonjour/3">
                <h1>tous</h1>
            </Route>
            <Route>
                <h1>404</h1>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
