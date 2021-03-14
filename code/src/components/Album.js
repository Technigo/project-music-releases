import React from 'react';


const Album = (props) => {

    return(
        <>
        <div className="artistcard-container">
           <div className="artistcard">
               <div className="albumcover">
                    <a href={props.albumContent.external_urls.spotify}>
                        <img src={props.albumContent.images[1].url} className="albumimg" alt="albumcover" />
                        <div className="albumoverlay">
                            <div className="hover-icons">
                                <img src="../icons/heart.svg" className="icons" alt="heart-icon"></img>
                                <img src="../icons/play.svg" className="play-icon" alt="play-icon"></img>
                                <img src="../icons/dots.svg" className="icons" alt="dot-icon"></img>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="artistinfo">

                   <div className="albumname">
                        <a className="albumlink" href={props.albumContent.external_urls.spotify}>
                            <h3>{props.albumContent.name}</h3>
                        </a>
                    </div>

                    <div className="artistname">
                            <div class="single-artist">
                                <a className="artistlink" href={props.albumContent.artists[0].external_urls.spotify}>
                                {props.albumContent.artists.map((artist, index) => {
                                    return ( 
                                    
                                    <React.Fragment key={artist.id}>
                                    <div className="artist-item">   
                                      <span className="comma"> {index > 0 && index !== props.albumContent.artists.length - 1 && ', '}</span>
                                      <span className="comma"> {index !== 0 && index === props.albumContent.artists.length - 1 && ' & '}</span>

                                      <h2 key={artist} className="artists">{artist.name}</h2>
                                    </div>
                                    </React.Fragment>                                   
                                )
                                })}
                                </a>
                            </div>
                    </div>
                 
                 
                </div>
            </div>
        </div>
        </>
    )
}
    
    

export default Album;

