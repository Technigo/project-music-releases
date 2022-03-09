import React from 'react'

import Artist from './Artist'

// Named export
const Album = (props) => {
    return (
    <article className="Album">
        <h2>{props.albumName}</h2>
        <a href={props.albumLink}>
            <img src={props.img} />
        </a>

        <div className="artistContainer">
            {props.artists.map((artist) =>

            <Artist
                artist = {artist}
                />
                )
            }
            </div>

        {/* <a href={props.artistLink}><p>{props.artistName}</p>
        </a>  */}

    </article>
    )
}

export default Album