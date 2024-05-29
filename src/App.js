import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/login";
import Header from "./components/header";
import CommentsPage from "./components/comments";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <Router>
        <div>
          {isLoggedIn && <Header setIsLoggedIn={setIsLoggedIn} />}
          <Switch>
            <Route exact path="/">
              {isLoggedIn ? (
                <Redirect to="/comments" />
              ) : (
                <Login setIsLoggedIn={setIsLoggedIn} />
              )}
            </Route>
            <Route path="/comments">
              {isLoggedIn ? <CommentsPage /> : <Redirect to="/" />}
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
