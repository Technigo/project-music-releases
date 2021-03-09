import React from 'react'

const Album = (prop) => {
    
    return (
        <div>
            <img src={prop.image}/>
            <h2>{prop.title}</h2>
            <h3>{prop.artist}</h3>
            <h4>{prop.albumType}</h4>
        </div>
    )
}

export default Album