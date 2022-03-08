import React from 'react';

export const Artist = (props) => {
    const artist = props.artist
    // console.log(props.artist[0].name)
    const artistList = artist.map((artist) =>
    artist.name)
    console.log(artistList)
    return (
        // props.artist[0].name
        artistList.join(", ")
        )
}