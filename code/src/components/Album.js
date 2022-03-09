import React from 'react'

// import Artist from './Artist'

const Album = (props) => {
    console.log(props)


    return (
        <article className="album-card">
            <div className="image-container">
                <img src={props.img} alt="album cover"/>
            </div>
            <div className="text-wrapper">
                <p className="album-title">{props.albumTitle}</p>
                <p className="artist-name">
                    {/* {props.artists.map((artist) =>
                    <Artist 
                        artist = {artist}
                    />
                )
                } */}
                </p>
            </div>
        </article>
    )
}

export default Album 