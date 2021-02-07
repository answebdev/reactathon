import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import InfiniteScroll from './components/pages/InfiniteScroll';
import MapboxReact from './components/pages/MapboxReact';
import ReactPagination from './components/pages/ReactPagination';
import ReactMotion from './components/pages/ReactMotion';
import ReactSpring from './components/pages/ReactSpring';
import ReactTransitionGroup from './components/pages/ReactTransitionGroup';
import UsingState from './components/pages/UsingState';
import PasswordGenerator from './components/pages/PasswordGenerator';
import MusicAlbums from './components/pages/MusicAlbums';
import SearchForm from './components/pages/SearchForm';
import PostForm from './components/pages/PostForm';
import Chart from './components/pages/Chart';
import Navigation from './components/layout/Navigation';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/infinite-scroll' component={InfiniteScroll} />
          <Route exact path='/mapbox-react' component={MapboxReact} />
          <Route exact path='/react-pagination' component={ReactPagination} />
          <Route exact path='/react-motion' component={ReactMotion} />
          <Route exact path='/react-spring' component={ReactSpring} />
          <Route
            exact
            path='/react-transition-group'
            component={ReactTransitionGroup}
          />
          <Route exact path='/using-state' component={UsingState} />
          <Route
            exact
            path='/password-generator'
            component={PasswordGenerator}
          />
          <Route exact path='/music-albums' component={MusicAlbums} />
          <Route exact path='/search-form' component={SearchForm} />
          <Route exact path='/post-form' component={PostForm} />
          <Route exact path='/chart' component={Chart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
