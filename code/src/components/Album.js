import React from 'react'

const Album = (props) => {
    return (
        <div>
            {props.album.map((album) => {
            return (
                <>
                <a href={album.external_urls.spotify} key={album.id}>
                    <img src={album.images[0].url} ></img>
                    <h5 className="artist-name">
                     {album.name}
                    </h5>
                </a>
                </>
            )
            })}
        </div>
    )
}

export default Album 