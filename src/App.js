import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Add from "./components/Add";
import List from "./components/List";
import Data from "./data/data.json";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-inverse">
          <ul className="nav navbar-nav">
            <li className="active">
              <Link to="/" className="my-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/add" className="my-link">
                Add
              </Link>
            </li>
            <li>
              <Link to="/list" className="my-link">
                List
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/list" component={List} />
          <Route path="/add" component={Add} />
        </Switch>
        <div className="posts">
          {Data.map((post) => {
            return (
              <div key={post.id} className="post">
                <h3>{post.author}</h3>
                <p>{post.publishedDate}</p>
                <h4>{post.title}</h4>
                <p>{post.lyric}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Router>
  );
}

export default App;
