import React from 'react';
import author from '../me1.jpeg';


const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xs-12">
                    <div className="photo-wrap mb-5">
                   <img className="profile-img" src={author} alt="author" /> 
                   </div>
                </div>
                <div className="col-lg-6 col-xs-12">
                    <h1 className="about-heading">About me</h1>
                   <p>
                       Hi, I am rosie.<br />
                       I just graduated in software engineering and I'm looking for my junior job 🙃.<br />
                       Have excellent interpersonal skills, high motivation and the ability to learn quickly.
                    </p> 
                </div>
            </div>
            
        </div>
    )
}

export default AboutMe
