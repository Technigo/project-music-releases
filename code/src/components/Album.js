import React from 'react'
import Artist from './Artist' 
import Icon from './Icon'

const Album = (props) => {

    return (
        <article className="album-card">
            <div className="image-container">
                <Icon />
                <img src={props.item.images[1].url} className="album-image" alt="album cover"/>
            </div>
            <div className="text-wrapper">
                <h3 className="album-title">{props.item.name}</h3>
                <h4 className="artist-name"> <Artist artistArray={props.item.artists} /></h4>
                <a className="linked-artist" href={props.artistLink}></a>
            </div>
         </article>
    )
}

export default Album 




        {/* borrowed this from your friend artsits links works moved them above
         <a href={props.albumLink}>
            <img className="image-card" src={props.img} alt="album-cover" /></a>
            <h2 className="album-name">{props.albumName}</h2>
            <a className="linked-artist" href={props.artistLink}>
            <p className="linked-artist">{props.artistName}</p>
        </a>  */}
                    
                    
                    /* {props.artists.map((artist) =>
                    <Artist artist = {artist}
                    />    
                )
                } */

                // <Artists artistArray={props.item.artists} />


                // <h3 className="song-artists">
                {/*<a
                  href={props.item.artists[0].external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>*/}
                  {/* <Artists artistArray={props.item.artists} />
                
              </h3> */}