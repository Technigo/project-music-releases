import React from 'react'

import heart from '../icons/heart.svg'
import dots from '../icons/dots.svg'
import play from '../icons/play.svg'

// import Header from './Header' makes it broken, could put header inside app also

import Artist from './Artist' 

const Album = (props) => {
    console.log('hejhej', props)

    return (
       
        <article className="album-card">
          
            <div className="image-container">
              <a href={props.item.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer">
                <img src={props.item.images[1].url} alt="album cover"/>
                <div className="icon-container">
                  <img className="icon" src={heart} alt="heart-icon"/>
                  <img className="play-icon" src={play} alt="play-icon"/>
                  <img className="icon" src={dots} alt="dots-icon"/>
                </div>
              </a>
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




        /* borrowed this from your friend artsits links works moved them above
         <a href={props.albumLink}>
            <img className="image-card" src={props.img} alt="album-cover" /></a>
            <h2 className="album-name">{props.albumName}</h2>
            <a className="linked-artist" href={props.artistLink}>
            <p className="linked-artist">{props.artistName}</p>
        </a>  */
                    
                    
                    /* {props.artists.map((artist) =>
                    <Artist artist = {artist}
                    />    
                )
                } */

                // <Artists artistArray={props.item.artists} />


                // <h3 className="song-artists">
                /*<a
                  href={props.item.artists[0].external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>*/
                  /* <Artists artistArray={props.item.artists} />
                
              </h3> */

//VÅR KOD
// import React from 'react'

// const Album = (props) => {

//     console.log(props)
//     return (
//         <section className="music">
//             <h3>{props.albumDetails.name}</h3>
//             <p>{props.albumDetails.href}</p>
//             <img src={props.albumDetails.images[0].url} alt="albumcover"/>
//         </section>
//         // <div className="artistName"> 
//         //     <p>{props.albumDetails.artists.name}</p>
//         // </div>
//     )
// }
// export default Album

