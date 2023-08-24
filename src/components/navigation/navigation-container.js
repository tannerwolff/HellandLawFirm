import React, {useState} from "react";

import Navigation from "./navigation";
import MobileNavigation from "./mobile-nav";



export default function() {
    
    return (
        <div className="navigation-wrapper">
            <Navigation />
            <MobileNavigation />
         </div> 
     )
}