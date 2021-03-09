import React from 'react'
import data from '.././data.json'

const Artists = () => {
    return (
        <div>
        {data.albums.items.map(album => {
            return (
            <div> 
                <a href={album.external_urls.spotify} target="_blank">
                    <p>{album.name}</p>
                </a>
                <a href={album.artists[0].external_urls.spotify} target="_blank">
                    <p>{album.artists[0].name}</p>
                </a>
            </div>
            )
        })}
        </div>
    )
}

export default Artists

/* <p>Artist: </p>
                <p>Title: {album.name}</p>
                <p>Link: {album.external_urls.spotify}</p> */