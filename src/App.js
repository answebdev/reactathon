import { hot } from 'react-hot-loader/root';
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
import MusicAlbumsDynamicRouting from './components/pages/MusicAlbumsDynamicRouting';
import Artist from './components/pages/Artist';
import SearchFilter from './components/pages/SearchFilter';
import Countries from './components/pages/Countries';
import CountryDetail from './components/pages/CountryDetail';
import BookDetails from './components/pages/BookDetails';
import Weather from './components/pages/Weather';
import BookSearch from './components/pages/BookSearch';
import Movies from './components/pages/Movies';
import PostForm from './components/pages/PostForm';
import Chart from './components/pages/Chart';
import ReactTestingLibrary from './components/pages/ReactTestingLibrary';
import Clickers from './components/pages/Clickers';
import Fetch from './components/pages/Fetch';
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
          <Route
            exact
            path='/music-albums-dynamic-routing'
            component={MusicAlbumsDynamicRouting}
          />

          <Route
            exact
            path='/music-albums-dynamic-routing/:id'
            component={Artist}
          />
          <Route exact path='/search-filter' component={SearchFilter} />
          <Route exact path='/countries' component={Countries} />
          <Route exact path='/countries/:id' component={CountryDetail} />
          <Route exact path='/weather' component={Weather} />
          <Route exact path='/book-search' component={BookSearch} />
          <Route exact path='/books/:id' component={BookDetails} />
          <Route exact path='/movies' component={Movies} />
          <Route exact path='/post-form' component={PostForm} />
          <Route exact path='/chart' component={Chart} />
          <Route
            exact
            path='/react-testing-library'
            component={ReactTestingLibrary}
          />
          <Route exact path='/clickers' component={Clickers} />
          <Route exact path='/fetch' component={Fetch} />
        </Switch>
      </div>
    </Router>
  );
}

export default hot(App);
