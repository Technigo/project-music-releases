import React from "react";

import "./header.css";

    // We broke the header out to be rendered at the top-level (index.js)
    // to make the HTML a little bit more structured/semantic
    //
    // There's also nothing in here that needs to 'talk'
    // with the other components from App.js
export const Header = () => {
    return (
        <h1 className="header">New-ish music releases</h1>
    )
}