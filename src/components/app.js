import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch, 
  Route
} from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faTrash, faPhoneAlt, faFax, faSignInAlt } from "@fortawesome/free-solid-svg-icons";

import Navigation from './navigation/navigation-container';
import ScrolltoTop from './navigation/scrolltotop';
import Home from "../components/pages/home";
import AreasofPractice from "../components/pages/areasofpractice";
import About from "../components/pages/about";
import GetinTouch from "../components/pages/getintouch";
import PayanInvoice from "../components/pages/payaninvoice";
import NoMatch from "../components/pages/no-match";


library.add(faMapMarkerAlt, faTrash, faPhoneAlt, faFax, faSignInAlt)


export default class App extends Component {
  constructor(props){
    super(props);

  }
  render() {
    return (
      <div className='app'>
        

        <Router>
          <div className="all-content-wrapper">
            <Navigation />
            <ScrolltoTop />
            

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
        <div className="footer-wrapper">
          <div className='company-name'>
            Helland Law Firm, pllc
          </div>
          <div className='company-address'>
            217 5th STREET SOUTH
          </div>
          <div className='company-city'>
                  GLASGOW, MT 59230
          </div>
          <div className='company-phone'>
            (406) 228-9331
          </div>
          <div className='company-email'>
            CONNECT@HELLANDLAWFIRM.COM
          </div>
          <div className="copyright">
            ©2023 by Wolff Web Design, LLC 
          </div>  
        </div>

              
      </div>
    );
  }
}
