import React from "react";


export const Album = (props) => {
    
 
    //return the album cover 
    return (
        <>
        {/* Return the album link to spotify*/ }
            <div className="Album-wrapper" >
                <div className="Album">
                    <a href={props.album.external_urls.spotify}
                    key={props.id}
                    target="_blank"
                    className="no-underline"
                    alt="link to spotify"
                    
                    >
        {/* Return the album cover*/ }
                    <img src ={props.album.images[1].url}
                    /* key={images.external_urls} */
                    target="_blank"
                    alt="picture of album cover"/>
                    <div className="hover-icons">
                        <img src ="./icons/heart.svg" className="heart" alt="heart icon"></img>
                        <img src ="./icons/play.svg" className="play" alt="play icon"></img>
                        <img src ="./icons/dots.svg" className="dots" alt="three dots icon"></img>
                    </div>

                        <h1 className="AlbumName">{props.album.name} </h1>
                    </a> 
                </div>
         {/* Return artist name*/ }
                <div className="artistName">
                    {props.album.artists.map(artist=> {
                        return (
                        <a href={artist.external_urls.spotify}
                        target="_blank"
                        /* key={artists.id} */
                        className="no-underline" alt="link to spotify">
                        <p className="artist"> {artist.name}</p> 
                        </a>
                        )
                    })}
                </div>
            </div>
        </>
    )
} 