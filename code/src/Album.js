import React from 'react'

const Album = (prop) => {
    
    return (
        <div className="albumCard">
            <img className="albumImage" src={prop.image}/>
            <h2 className="albumTitle">{prop.title}</h2>
            <h3 className="artistName">{prop.artist}</h3>
        </div>     
    )
}

export default Album