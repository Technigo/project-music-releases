import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <img className="logo" src="./icons/logo-music-project_font_white_V2.png" alt="logo" />
            <img className="hamburger" src="./icons/hamburger.png" alt="hamburger"/>
            <nav className="nav">
                <p className="nav-item" >Home</p>
                <p className="nav-item" >About</p>
                <p className="nav-item" >Contact</p>
            </nav> 
        </header>
    )
}
export default Header;
