import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import InfiniteScroll from './components/pages/InfiniteScroll';
import MapboxReact from './components/pages/MapboxReact';
import ReactDragDrop from './components/pages/ReactDragDrop';
import ReactPagination from './components/pages/ReactPagination';
import GooglePlaces from './components/pages/GooglePlaces';
import ReactStripeElements from './components/pages/ReactStripeElements';
import ReactReCaptcha from './components/pages/ReactReCaptcha';

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
          <Route exact path='/react-drag-n-drop' component={ReactDragDrop} />
          <Route exact path='/react-pagination' component={ReactPagination} />
          <Route exact path='/google-places' component={GooglePlaces} />
          <Route
            exact
            path='/react-stripe-elements'
            component={ReactStripeElements}
          />
          <Route
            exact
            path='/using-recaptcha-in-react-and-node'
            component={ReactReCaptcha}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
