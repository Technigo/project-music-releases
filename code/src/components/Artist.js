import React from 'react'

export const Artist = (props) => {
        return (

            <div className="artists-container">
                <a href={props.artistLink} target="_blank">
                <p>{props.artistName}</p>
                </a>
            </div>
        )
    }





