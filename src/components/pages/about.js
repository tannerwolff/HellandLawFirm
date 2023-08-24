import React from 'react';

import Group from "../../../static/assets/group.png";
import Peter from "../../../static/assets/peter.png";
import Allison from "../../../static/assets/allison.png";
import Zachary from "../../../static/assets/zachary.png";
import Haley from "../../../static/assets/haley.png";
import Brittany from "../../../static/assets/brittany.png";

export default function() {
return  <div className='complete-about-wrapper'>
            <div className='about-content-wrapper'>
                <div className='upper-about-content-wrapper'>
                    <div className='left-side-upper-about-wrapper'>
                        <img src={Group} alt="Helland Law Firm Group Photo"></img>    
                    </div>

                    <div className='right-side-upper-about-wrapper'>
                        <div className='right-side-about-us-header'>
                            About Us
                        </div>
                        <div className='right-side-about-us-line'>
                        </div>
                        <div className='about-us-upper-info'>
                            Helland Law Firm was founded in 2003 by Glasgow native, Pete Helland, when he purchased Gallagher and Archambeault, P.C. from long-time Valley County Attorney Gerald T. Archambeault.<br/><br/>
                            Pete Helland set out with a goal to be a helping hand in northeast Montana. The firm's aim has been and continues to be working alongside clients in whatever their needs may be. Helland Law Firm is your local law firm, that is here to help.
                        </div> 
                    </div>
                </div>
                <div className='lower-about-content-wrapper'>
                    <div className='meet-the-team-header'>
                        Meet The Team
                    </div>

                    <div className='meet-the-team-line'>
                    </div>
                    <div className='all-headshot-bio-container'>
                        <div className='headshot-bio-wrapper'>
                            <div className='headshot-item'>
                                <img src={Peter} alt="Peter Helland"></img>
                            </div>
                            <div className='bio-item'>
                                <div className='bio-name'>
                                    Peter L. Helland
                                </div>
                                <div className='bio-position'>
                                    Licensed Attorney
                                </div>
                            </div>

                        </div>

                        <div className='headshot-bio-wrapper'>
                            <div className='headshot-item'>
                            <img src={Zachary} alt="Zachary Lipszyc"></img>
                            </div>
                            <div className='bio-item'>
                                <div className='bio-name'>
                                    Zachary M. Lipszyc
                                </div>
                                <div className='bio-position'>
                                    Licensed Attorney
                                </div>
                            </div>

                        </div>

                        <div className='headshot-bio-wrapper'>
                            <div className='headshot-item'>
                                <img src={Allison} alt="Allison Helland"></img>
                            </div>
                            <div className='bio-item'>
                                <div className='bio-name'>
                                    Allison Helland
                                </div>
                                <div className='bio-position'>
                                    Office Manager and Bookkeeper
                                </div>
                            </div>

                        </div>

                        <div className='headshot-bio-wrapper'>
                            <div className='headshot-item'>
                                <img src={Haley} alt="Haley Holstein"></img>
                            </div>
                            <div className='bio-item'>
                                <div className='bio-name'>
                                    Haley Holstein
                                </div>
                                <div className='bio-position'>
                                    Paralegal
                                </div>
                            </div>

                        </div>

                        <div className='headshot-bio-wrapper'>
                            <div className='headshot-item'>
                                <img src={Brittany} alt="Nicole Unknown"></img>
                            </div>
                            <div className='bio-item'>
                                <div className='bio-name'>
                                    Brittany Sallee
                                </div>
                                <div className='bio-position'>
                                    unknown
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
}