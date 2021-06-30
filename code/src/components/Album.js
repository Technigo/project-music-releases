import React from 'react'
import Artist from './Artist'

const Album = (props) => {
    return (
        
            <div>
                <div className="cover-container">
                    <img className="cover-image" alt="Album cover" src={props.img} />
                    <div className="icons-container">
                        <img className="icon-heart" src="icons/heart.svg" alt="Like icon" />
                        <img className="icon-play" src="icons/play.svg" alt="Play icon" />
                        <img className="icon-dot" src="icons/dots.svg" alt="More icon" />
                    </div>
                </div>
                    <a href={props.albumurl} target="_blank" rel="noopener noreferrer">
                        <p className="album-title">{props.album}</p>
                    </a>
                    <Artist 
                        artists={props.artist} /> 
            </div> 
    )
}

export default Album;




// left for reference to earlier attempts
//<a href={props.artisturl} target="_blank" rel="noopener noreferrer"> 
//<p className="contributors">{props.contributors}</p>         
//</a>

// import Artist from './Artist'
//<Artist artists={props.artist} />
//