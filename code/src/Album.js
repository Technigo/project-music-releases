import React from 'react'


export const Album = (props) => {
    console.log("props", props)
    return (
        <div className="child">
            <div className="album-img">
                <img src={props.image}/>
            </div>
            <div className="album-title">
                {props.name}
            </div> 
            <div className="artist">
                Artist
            </div>
        </div>   
    )
}


 