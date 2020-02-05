import React from 'react';
import './App.css';
import Todo from './Todo';
import Home from './Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  return (
    <Router>
      <div className="App-header">
        <nav>
          <ul className="route">
            <li>
              <Link className="router" to="/">To Do List Page</Link>
            </li>
            <li>
              <Link className="router" to="/home">Other Page</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Todo />
          </Route>
        </Switch>
          
      </div>
    </Router>
  );
}

export default App
