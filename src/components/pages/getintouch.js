import React from 'react';
import {BsFacebook} from "react-icons/bs";

import Mailto from "./mailto"

export default function() {
return  <div className='complete-getintouch-wrapper'>
            <div className='left-getintouch-wrapper'>
                <h1>Get in Touch</h1>
                <div className='getintouch-address'>
                    217 5th Street South <br/>
                    Glasgow, MT 59230
                </div>
                <div className='getintouch-phone'>
                    Phone: (406) 228-9331
                </div>
                <div className='getintouch-tollfree'>
                    Toll Free: (800) 863-9331
                </div>
                <div className='getintouch-fax'>
                    Fax: (406) 228-9335
                </div>
                <div className='getintouch-email'>
                    <Mailto label="contact@hellandlawfirm.com" mailto="mailto:contact@hellandlawfirm.com" />
                </div>
                <div className='getintouch-email'>
                    
                    <a href="https://www.facebook.com/hellandlawfirmpllc" target="_blank"><BsFacebook className='getintouch-facebook' size="25px" color="white"/></a>
                </div>
            </div>
            <div className='right-getintouch-wrapper'>
                <div className='open-hours-title'>
                    Open Hours
                </div>
                <div className='open-hours-times'>
                    <div className='days'>
                    Monday - Friday
                    </div>
                    <div className='hours'>
                        8:00 am - 5:00 pm
                    </div>
                    
                </div>
                <div className='getintouch-map'>
                    <iframe className='google-map-hlf' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d592.3752802368218!2d-106.63736228239841!3d48.19360867238781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x533dab9f727eef61%3A0x2c20a7c4a60ac5c5!2sHelland%20Law%20Firm!5e0!3m2!1sen!2sus!4v1692820082085!5m2!1sen!2sus" width="475" height="225"></iframe>
                </div>
            </div>
        </div>
}