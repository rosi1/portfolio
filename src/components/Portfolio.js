import React from 'react';
import culture from '../culture.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearchPlus} from '@fortawesome/free-solid-svg-icons';
import {PopupboxManager, PopupboxContainer} from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

const Portfolio = () => {

    const openPopupboxCulture = () =>{
        const content=(
            <>
            <img className="portfolio-image-popupbox" src={culture} alt='leisure culture clone project'/>
            <p></p>
            <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/rosi1/Leisure-culture")}>https://github.com/rosi1/Leisure-culture</a>
            </>
        )
       
        PopupboxManager.open({content})
    }
    const popupConfigCulture={
        titleBar: {
            enable: true,
            text: 'Leisure culture clone project'
        },
        fadeIn: true,
        fadeInSpeed:500
    }

    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxCulture}>
                    <img className="portfolio-image" src={culture} alt="portfolio" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
            </div>
        </div>
        <PopupboxContainer {...popupConfigCulture}/>
    </div>
    )
}

export default Portfolio;
