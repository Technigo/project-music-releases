import React from "react";

export const Playlists = (props) => {

    return(

        <>
            <div className="leftside-image-container">
                <a href={props.playlistURL} 
                target="_blank" 
                rel="noopener noreferrer">
                    <img className="pick-image" alt="Our choice" src={props.image} />
                </a>
            </div>
        </>
    );
};