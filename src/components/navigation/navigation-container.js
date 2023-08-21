import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {Link} from 'react-router-dom';

import NavLogo from "../../../static/assets/HLF-favicon.png";
import Hamburger from "./hamburger";

export  default class NavigationComponent extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
           <div className="navigation-wrapper">
                <div className="nav-content-wrapper">
                    
                    <div className="nav-logo-wrapper">
                        <Link to="/" ><img src={NavLogo} alt="Helland Law Firm Logo"></img></Link>
                    </div>

                    <div className="nav-link-wrapper">

                        <div className="nav-link-item item1">
                            <NavLink exact to="/" activeClassName="nav-link-active">Home</NavLink>
                        </div>

                        <div className="nav-link-item item2">
                            <NavLink to="/AreasOfPractice" activeClassName="nav-link-active">Areas of Practice</NavLink>
                        </div>

                        <div className="nav-link-item item3">
                            <NavLink to="/About" activeClassName="nav-link-active">About</NavLink>
                        </div>

                        <div className="nav-link-item item4">
                            <NavLink to="/GetInTouch" activeClassName="nav-link-active">Get in Touch</NavLink>
                        </div>

                        <div className="nav-link-item item5">
                            <NavLink to="/PayAnInvoice" activeClassName="nav-link-active">Pay an Invoice</NavLink>
                        </div>

                        <Hamburger />
                        
                    </div>

                
                </div>
            </div> 
        )
    }
}