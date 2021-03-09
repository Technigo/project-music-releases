import React from 'react'
import Artist from './Artist'

const Album = (props) => {
    console.log(props)
    return (
        
            <div>
                <img className="cover-image" src={props.img} />
                <p className="album-title">{props.album}</p>
                <Artist artists={props.artist} />
            </div>
    )
}

export default Album;