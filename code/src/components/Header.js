import React from 'react';

export const Header = (props) => {
    console.log("Header Props: " + props);
    return (
        <header>
            <h1>{props.headerText}</h1>
        </header>
    );
}