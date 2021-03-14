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
                        <a className="artistlink" href={props.albumContent.artists[0].external_urls.spotify}>
                            <h2>{props.albumContent.artists[0].name}</h2>
                        </a>
                    </div>

                 
                </div>
            </div>
        </div>
        </>
    )
}
    
    

export default Album;

