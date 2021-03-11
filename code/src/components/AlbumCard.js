import React from 'react'
import Artists from './Artists'

const AlbumCard = (props) => {
    return (
    <div className="card-container">
        <div className="image-container">
            <img className="album-cover" src={props.albumContent.images[0].url} alt="album cover"/>
            <div className="image-overlay"> 
                <div className ="icon-container">
                    <img className="heart-icon" src="./icons/heart.svg" alt="heart icon"></img>
                    <img className="play-icon" src="./icons/play.svg" alt="play icon"></img>
                    <img className="dots-icon" src="./icons/dots.svg" alt="dots icon"></img>
                </div>
            </div>
        </div>

        <div className="text-container">
            <a className="title" href={props.albumContent.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                {props.albumContent.name}
            </a>
            {props.albumContent.artists.map(item => (
            <Artists key={item.id} artistContent = {item} />
            ))}   
        </div>
    </div>
        )
}
export default AlbumCard
