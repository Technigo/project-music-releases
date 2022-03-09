import React from 'react'

const Album = (props) => {
    console.log(props)

    return (
        <article className="album-card">
            <div className="image-container">
                <img src={albums.item.images[0].url} alt="album cover"/>
            </div>
            <div className="text-wrapper">
                <p className="album-title">Album Title X</p>
                <p className="artist-name">Artist Name X</p>
            </div>
        </article>
    )
}

export default Album 