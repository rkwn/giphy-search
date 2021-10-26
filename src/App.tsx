import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import './App.css';
import NavBar from './component/NavBar';
import SearchPage from './pages/SearchPage';
import FavoritesPage from './pages/FavoritesPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/search" />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/saved">
            <FavoritesPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
