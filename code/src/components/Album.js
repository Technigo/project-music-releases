import React from 'react';


const Album = (props) => {
    console.log(props);
    return (
        <div className="artistcard">
            <a href={props.albumurl}>
                <img src={props.picture} alt="albumcover" />
            </a>
            <div className="artistName">
            <h2>{props.name}</h2>
            <a href={props.externalurls}>
                <h3>{props.artist}</h3>
            </a>
            </div>
        </div>
    )
}

export default Album;