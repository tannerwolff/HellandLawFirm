import React from 'react';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import FamilyLaw from "../../../static/assets/familylaw.png";
import CorporateLaw from "../../../static/assets/corporatelaw.png";
import MedicalLaw from "../../../static/assets/medicallaw.png";
import CivilLaw from "../../../static/assets/civillaw.png";
import EstateLaw from "../../../static/assets/estatelaw.png";
import RealEstateLaw from "../../../static/assets/realestatelaw.png";

export default function() {
return  <div className='complete-homepage-wrapper'>
            <div className='top-home-title-section-wrapper'>
                <div className='top-home-title-section-background'>
                    <div className='top-home-title-section-text-wrapper'>
                        <div className='top-home-title-company-name'>
                            Helland Law Firm, pllc
                        </div>

                        <div className='top-home-title-company-slogan'>
                            Your Local Law Firm
                        </div>
                    
                    </div>

                </div>

            </div>

            <div className='here-to-help-banner-wrapper'>
                <div className='here-to-help-text'>
                    We are here to help.
                </div>
                <div className='here-to-help-info'>
                    Helland Law Firm was founded in 2003 by Glasgow native, Pete Helland, when he purchased Gallagher and Archambeault, P.C. from long-time Valley County Attorney Gerald T. Archambeault.
                </div>

            </div>

            <div className='complete-practice-area-wrapper'>
                <div className='home-practice-area-header-line-wrapper'>
                    <div className='home-practice-area-header'>
                        Practice Areas
                    </div>
                    <div className='home-practice-area-line'>
                    </div>

                </div>
                <div className="practice-area-cards-wrapper">
                    <div className='all-cards-wrapper'>
                        <HashLink to="/areasofpractice#familylaws">
                            <div className='single-card-background-picture container'>
                                <img src={FamilyLaw} alt="Avatar" className="image" />
                                <div className="middle">
                                    <div className="areaofpractice-text">Family Law</div>
                                    <div className="areaofpractice-description">Whether it's adoptions, guardianships, name. changes or divorce, we represent you.</div>
                                </div>
                            </div>
                        </HashLink>

                        <HashLink to="/areasofpractice#corporatelaw">
                            <div className='single-card-background-picture container'>
                                <img src={CorporateLaw} alt="Avatar" className="image" />
                                <div className="middle corporate">
                                    <div className="areaofpractice-text">Corporate Law</div>
                                    <div className="areaofpractice-description">Assistance that is personalized towards you and your needs in the corporate world.</div>
                                </div>
                            </div>
                        </HashLink>

                        <HashLink to="/areasofpractice#personalinjury">
                            <div className='single-card-background-picture container'>
                                <img src={MedicalLaw} alt="Avatar" className="image" />
                                <div className="middle personal">
                                    <div className="areaofpractice-text">Personal Injury | Medical Malpractice</div>
                                    <div className="areaofpractice-description">Fighting alongside you to get the compensation you deserve.</div>
                                </div>
                            </div>
                        </HashLink>

                        <HashLink to="/areasofpractice#civil">
                            <div className='single-card-background-picture container'>
                                <img src={CivilLaw} alt="Avatar" className="image" />
                                <div className="middle civil">
                                    <div className="areaofpractice-text">Civil Litigation</div>
                                    <div className="areaofpractice-description">Helland Law Firm helps you settle disputes through the court system.</div>
                                </div>
                            </div>
                        </HashLink>

                        <HashLink to="/areasofpractice#estateplanning">
                            <div className='single-card-background-picture container'>
                                <img src={EstateLaw} alt="Avatar" className="image" />
                                <div className="middle estate">
                                    <div className="areaofpractice-text">Estate Planning | Probate</div>
                                    <div className="areaofpractice-description">Whether it's preparing documents or needing to administer the estate, we help guide you in the right direction.</div>
                                </div>
                            </div>
                        </HashLink>

                        <HashLink to="/areasofpractice#real-estate">
                            <div className='single-card-background-picture container'>
                                <img src={RealEstateLaw} alt="Avatar" className="image" />
                                <div className="middle">
                                    <div className="areaofpractice-text">Real Estate </div>
                                    <div className="areaofpractice-description">Working with you in buying, selling, leasing, and more within real estate.</div>
                                </div>
                            </div>
                        </HashLink>

                    </div>
                </div>

            </div>
            <div className='complete-helping-hands-wrapper'>
                <div className='helping-hands-background-wrapper'>
                    <div className='helping-hands-text'>
                        A Helping Hand in<br/> Northeast Montana.
                    </div>
                </div>
            </div>
            
        </div>
}