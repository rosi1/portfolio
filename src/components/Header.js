import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div id="home" className="header-wraper">
            <div className="main-info">
                <h1>Rosie Cnaani CV</h1>
                <Typed
                    className="typed-text"
                    strings={["Html","CSS","JS","Bootstrap","React","Node.JS"]}
                    typeSpeed={50}
                    backSpeed={60}
                    loop
                />
            </div>
        </div>
    )
}

export default Header;
