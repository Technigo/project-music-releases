import React from 'react';

const Header = (props) => {
    console.log(props);
    return (
        <header>
            <h1>{props.title}</h1> // Hämtar title från App
        </header>
    )
}

export default Header;