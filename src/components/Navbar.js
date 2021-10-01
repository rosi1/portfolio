import React from 'react';
import logo from '../logo.png';
import {Link} from 'react-scroll';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">
                <Link smooth={true} to="home" className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo"/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <span className="navbar-toggler-icon"></span> */}
                    <FontAwesomeIcon icon={faBars}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link smooth={true} to="home" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to="about" offset={-100} className="nav-link" href="">about me</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to="experience" offset={-100} className="nav-link" href="">work experience</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to="portfolio" offset={-110} className="nav-link" href="">portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to="contact" offset={-100} className="nav-link" href="#">contact</Link>
                    </li>
                    </ul>
                </div>
  </div>
</nav>
    )
}

export default Navbar;
