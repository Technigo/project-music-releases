import React from 'react'
import Artist from './Artist' 
import Icon from './Icon'

const Album = (props) => {

    return (
        <article className="album-card">
            <a className="linked-album" href={props.item.external_urls.spotify} alt="link to album">      
                <div className="image-container">
                    <Icon />
                    <img src={props.item.images[1].url} className="album-image" alt="album cover"/>
                </div>
            </a>
            <div className="text-wrapper">
                <h3 className="album-title">{props.item.name}</h3>
                <h4 className="artist-name"> <Artist artistArray={props.item.artists} /></h4>
                <a className="linked-artist" href={props.artistLink} alt="link to artist"> </a>
            </div>
         </article>
    )
}

export default Album 