import React from 'react';
import {Link} from 'react-router-dom';


export default function() {
return  <div className='complete-payaninvoice-wrapper'>
            <div className='upper-section-payaninvoice'>
                <div className='upper-background-wrapper'>
                    <div className='upper-portion-overlay'>
                        <div className='upper-overlay-heading'>
                            Pay an Invoice
                        </div>
                        <div className='upper-overlay-message'>
                            Use the button below to be taken to the online payment platform. <br/>
                            Using you invoice number you can make a payment online, rather than having to come into the office.
                        </div>
                        <div className='upper-overlay-button'>
                            <a target='_blank' href="" class="button">Pay Your Invoice</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lower-payaninvoice-section'>
                <div className='lower-payaninvoice-message'>
                    If you have questions regarding your invoice or with making a payment online please contact our office during business hours so we can answer any questions or resolve any payment issues.
                </div>

                <div className='lower-payaninvoice-link'>
                    <Link to="/getintouch"><b>Contact Helland Law Firm</b></Link>
                </div>
            </div>
        </div>
}