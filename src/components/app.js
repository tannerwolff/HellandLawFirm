import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch, 
  Route
} from "react-router-dom";

import NavigationContainer from './navigation/navigation-container';
import Home from "../components/pages/home";
import AreasofPractice from "../components/pages/areasofpractice";
import About from "../components/pages/about";
import GetinTouch from "../components/pages/getintouch";
import PayanInvoice from "../components/pages/payaninvoice";
import NoMatch from "../components/pages/no-match";


export default class App extends Component {
  constructor(props){
    super(props);

  }
  render() {
    return (
      <div className='app'>
        

        <Router>
          <div>
            <NavigationContainer />

            <Switch>

              <Route exact path="/" component={Home} />
              <Route path="/AreasOfPractice" component={AreasofPractice} />
              <Route path="/About" component={About} />
              <Route path="/GetInTouch" component={GetinTouch} />
              <Route path="/PayAnInvoice" component={PayanInvoice} />
              <Route component={NoMatch} />

            </Switch>
            
          </div>
        </Router>
        
      </div>
    );
  }
}
