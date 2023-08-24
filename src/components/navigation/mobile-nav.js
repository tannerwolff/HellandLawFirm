import React, {useState} from 'react';
import {BiMenu} from "react-icons/bi";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {Link} from 'react-router-dom';


import Navlinks from "./navlinks";
import Navlogo from "../../../static/assets/HLF-favicon.png"

export default function MobileNavigation() {

    const [open, setOpen] = useState(false);
    const hamburgerIcon = <BiMenu className='hamburger' size="50px" color="black"
        onClick={() => setOpen(!open)}/>

    const closeIcon = <AiOutlineCloseCircle className='hamburger' size="50px" color="black"
        onClick={() => setOpen(!open)}/>

    const closeMobileMenu = () => setOpen(false);

return  <div className="mobilenavigation-style">
            <Link to="/" ><img src={Navlogo} alt="Helland Law Firm Logo"></img></Link>
            {open ? closeIcon : hamburgerIcon}
            {open && <Navlinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
        </div>
}