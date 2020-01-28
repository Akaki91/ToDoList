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
      <div className="App">
        <div className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/items">Todo</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/items">
              <Todo />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          
        </div>
      </div>
    </Router>
  );
}

export default App
