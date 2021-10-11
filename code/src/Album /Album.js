import React from 'react'

const Album = ({ image, albumTitle, albumLink, artistName, artistLink }) => {
    return (
        <section className="main-container">
            <div className="album-card">
                <img src={image} alt="image-album" />
                <a href={albumLink} target="_blank" rel="noreferrer noopener"><h1>{albumTitle}</h1></a>
                <a href={artistLink} target="_blank" rel="noreferrer noopener"><p>{artistName}</p></a>
            </div>
        </section>
    )
}


export default Album