import React from 'react'

// import Header from './Header' makes it broken, could put header inside app also

import Artist from './Artist' 

const Album = (props) => {
    console.log(props)

    return (
        <article className="album-card">
            <div className="image-container">
                <img src={props.item.images[1].url} alt="album cover"/>
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