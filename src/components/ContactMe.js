import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {faMobile} from '@fortawesome/free-solid-svg-icons';
import {faMailchimp} from '@fortawesome/free-brands-svg-icons';
import { Size } from 'tsparticles/Options/Classes/Particles/Size/Size';
// import {faAt} from '@fortawesome/free-solid-svg-icons';


const ContactMe = () => {
    return (
        <div id="contact" className="contact-wrapper">
             
            <div  className="container">
                <h1 className="contact-header text-uppercase text-center py-5">contact</h1>
                <div className="row text-center mb-5">
                    
                    <div className="col-lg-4 col-xs-12 ">
                    <FontAwesomeIcon className="address-icon mb-4" icon={faMapMarkerAlt}/>
                    <h6 style={{fontSize:"20px", fontWeight:"bold"}}>Tel Aviv - Yaffo</h6>
                    </div>
                    
                    <div className="col-lg-4 col-xs-12 ">
                    <FontAwesomeIcon className="email-icon mb-4" icon={faMailchimp}/>
                    <h6 style={{fontSize:"20px", fontWeight:"bold"}}>rosicnaan@gmail.com</h6>
                    </div>
                    
                    <div className="col-lg-4 col-xs-12">
                    <FontAwesomeIcon className="phone-icon mb-4" icon={faMobile}/>
                    <h6 style={{fontSize:"20px", fontWeight:"bold"}}>050-3321654</h6>
                    </div>
                    
                </div>
            </div>
        </div>
        
    )
}

export default ContactMe;
