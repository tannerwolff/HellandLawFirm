import React from 'react';
import {Link} from 'react-router-dom';

import Navlinks from "./navlinks";
import Navlogo from "../../../static/assets/HLF-favicon.png"

export default function Navigation() {
return  <div className="navigation-style">
            <Link to="/" ><img src={Navlogo} alt="Helland Law Firm Logo"></img></Link>
            <Navlinks />
        </div>
}