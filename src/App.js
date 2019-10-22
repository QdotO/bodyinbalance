import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './components/Home';
import {About} from './components/About';
import {Contact} from './components/Contact';
import {NoMatch} from './components/NoMatch';
import {Services} from './components/Services';
import NavBar from './components/NavBar';
import './App.css';


function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/services' component={Services} />
          {/* <Route exact path='/schedule' component={Schedule} /> */}
          <Route exact component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
