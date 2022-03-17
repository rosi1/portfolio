import React from 'react';
import culture from '../culture.png';
import yummy from '../yum.png';
import weather from '../weather.png';
import travel from '../travel.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearchPlus} from '@fortawesome/free-solid-svg-icons';
import {PopupboxManager, PopupboxContainer} from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

const Project = () => {

    const openPopupboxCulture = () =>{
        const content=(
            <>
            <b style={{alignItems: 'center'}}>Leisure Culture</b><br />
            <img className="portfolio-image-popupbox" src={culture} alt='leisure culture clone project'/><br />
            <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/rosi1/Leisure-and-Culture.git")}>https://github.com/rosi1/Leisure-and-Culture.git</a>
            </>
        )
       
        PopupboxManager.open({content})
    }

    const openPopupboxTravel = () =>{
        const content=(
            <>
            <b style={{alignItems: 'center'}}>Travel with us</b><br />
            <img className="portfolio-image-popupbox" src={travel} alt='Travel with us project'/><br />
            <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/rosi1/travel_with_us.git")}>https://github.com/rosi1/travel_with_us.git</a>
            </>
        )
       
        PopupboxManager.open({content})
    }

    const openPopupboxWeather = () =>{
        const content=(
            <>
            <b>Weather in a second</b><br />
            <img className="portfolio-image-popupbox" src={weather} alt='Weather in a second project'/><br />
            <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/rosi1/hackaton-2")}>https://github.com/rosi1/hackaton-2</a>
            </>
        )
       
        PopupboxManager.open({content})
    }

    const openPopupboxYummy = () =>{
        const content=(
            <>
            <b>Yummy in my Tummy</b><br />
            <img className="portfolio-image-popupbox" src={yummy} alt='yummy in my tummy project'/><br />
            <b>Firebase:</b> <a className="hyper-link" onClick={() => window.open("https://yummy-in-my-tummy.web.app/")}>https://yummy-in-my-tummy.web.app/</a>
            </>
        )
       
        PopupboxManager.open({content})
    }
    const popupConfigYummy={
        titleBar: {
            enable: true,
            text: 'Project:',
        },
        fadeIn: true,
        fadeInSpeed:500
    }

    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Projects</h1>
                <div className="image-box-wrapper">
                    
                    <div className="portfolio-image-box" onClick={openPopupboxYummy}>
                    <img className="portfolio-image" src={yummy} alt="portfolio" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>

                    <div className="portfolio-image-box" onClick={openPopupboxTravel}>
                    <img className="portfolio-image" src={travel} alt="portfolio" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>

                    <div className="portfolio-image-box" onClick={openPopupboxWeather}>
                    <img className="portfolio-image" src={weather} alt="portfolio" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>

                    <div className="portfolio-image-box" onClick={openPopupboxCulture}>
                    <img className="portfolio-image" src={culture} alt="portfolio" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>

                </div>
            <PopupboxContainer {...popupConfigYummy}/>
        </div>
    </div>
    )
}

export default Project;
