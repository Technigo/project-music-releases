import React from 'react'

export const Artists = (props) => {
    const artists = props.artists;
    const ArtistNames = [];
    artists.map((artist) => {
        ArtistNames.push(<a href={artist.external_urls.spotify} target="_blank">{artist.name}</a>);
    })
    return ArtistNames.slice(1).reduce(function (xs, x, i) {
        return xs.concat([", ", x]);
    }, [ArtistNames[0]]);
}

