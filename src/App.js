// import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/login';
import Header from './components/header';
import CommentsPage from './components/comments';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Header/> */}
      {/* <Login/> */}
      <Router>
      <div>
        {isLoggedIn && <Header setIsLoggedIn={setIsLoggedIn}/>}
        <Switch>
          <Route exact path="/">
            {isLoggedIn ? <Redirect to="/comments" /> : <Login setIsLoggedIn={setIsLoggedIn} />}
          </Route>
          <Route path="/comments">
            {isLoggedIn ? <CommentsPage /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
