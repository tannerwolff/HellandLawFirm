import React from 'react';
import {NavLink} from "react-router-dom";

export default function Navlinks(props) {
return <div className='complete-nav-wrapper'>
    <div className="nav-link-wrapper">

        <div className="nav-link-item item1" onClick={() => props.isMobile && props.closeMobileMenu()}>
            <NavLink exact to="/" activeClassName="nav-link-active">Home</NavLink>
        </div>

        <div className="nav-link-item item2" onClick={() => props.isMobile && props.closeMobileMenu()}>
            <NavLink to="/AreasOfPractice" activeClassName="nav-link-active">Areas of Practice</NavLink>
        </div>

        <div className="nav-link-item item3" onClick={() => props.isMobile && props.closeMobileMenu()}>
            <NavLink to="/About" activeClassName="nav-link-active">About</NavLink>
        </div>

        <div className="nav-link-item item4" onClick={() => props.isMobile && props.closeMobileMenu()}>
            <NavLink to="/GetInTouch" activeClassName="nav-link-active">Get in Touch</NavLink>
        </div>

        <div className="nav-link-item item5" onClick={() => props.isMobile && props.closeMobileMenu()}>
            <NavLink to="/PayAnInvoice" activeClassName="nav-link-active">Pay an Invoice</NavLink>
        </div>

    </div>
</div>
}