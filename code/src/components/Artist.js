import React from 'react';

export const Artist = (props) => {
    const artist = props.artist
    // console.log(props.artist[0].name)

    const artistList = artist.map((artist) =>
        <div>
            <a href={artist.external_urls.spotify}>{artist.name}</a>
        </div>
    )

    console.log(artistList.length)
    const artistLink = artist.map((artist) => 
    artist.external_urls.spotify)
    // console.log(artistLink)
    // <p><a href='link'> artist <a>, <a href= link> artist <a></p>
    // artistList = artistList.join(', ')
    // console.log(arti)
    let newList = []
    if (artistList.length > 1) {
        // artistList = artistList.join(', ')
        artistList.forEach(item =>
            newList.push(item)
        )
    }

    console.log(newList)
    // console.log(artistList.join(', '))
    return (
        // props.artist[0].name
        artistList
        
        )
}