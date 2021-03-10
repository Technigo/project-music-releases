import React from 'react'

export const InfoArtist = (props) => {
    const firstArtist = props.artist[0].name;
    const firstArtistURL = props.artist[0].external_urls.spotify
    const lastArtist = props.artist[props.artist.length - 1].name
    const lastArtistURL = props.artist[props.artist.length - 1].external_urls.spotify
    const middleArtists = props.artist.slice(1, -1)

    let allArtists = [<a className='infoArtist' href={firstArtistURL} target='_blank'>{firstArtist}</a>]

    for (let artist of middleArtists) {
        allArtists.push(", ")
        allArtists.push(<a className='infoArtist' href={artist.external_urls.spotify} target='_blank'>{artist.name}</a>);
    }

    if (props.artist.length > 1) {
        allArtists.push(" & ")
        allArtists.push(<a className='infoArtist' href={lastArtistURL} target='_blank'>{lastArtist}</a>)
    }

    return <p> {allArtists} </p>
}
