import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './views/Home';
import SingleBeer from './views/SingleBeer';
import RandomBeer from './views/RandomBeer';
import NewBeer from './views/NewBeer';
import ListBeer from './views/ListBeer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/beers" exact component={ListBeer} />
            <Route path="/randomBeer" exact component={RandomBeer} />
            <Route path="/newBeer" exact component={NewBeer} />
            <Route path="/search?q={query}" component={ListBeer} />
            <Route path="/:id" component={SingleBeer} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
