import React from 'react';
import './Styles/App.css'
import Trending from './pages/Trending';
import NowPlaying from './pages/NowPlaying'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import TopRated from './pages/TopRated';
import Upcoming from './pages/Upcoming';
import IndividualMovie from './pages/IndividualMovie';

function App() {


  return (
    <div>
      <Router>
      <Navbar />
        <Switch>
          <Route exact path="/movie/:id">
           <IndividualMovie />
          </Route>
          <Route exact path="/">
           <Trending />
          </Route>
          <Route exact path="/popular">
           <Trending />
          </Route>
          <Route exact path="/now_playing">
           <NowPlaying />
          </Route>
          <Route exact path="/TopRated">
           <TopRated />
          </Route>
          <Route exact path="/upcoming">
           <Upcoming />
          </Route>
        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
