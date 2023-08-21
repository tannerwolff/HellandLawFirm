import React from 'react';
import {Link} from "react-router-dom";

export default function(){
    return(
    <div className="no-match-wrapper">
    <h1>We're sorry, that page doesn't exist!</h1>
    <Link to="/">Return to home here</Link>
    </div>
    );
}