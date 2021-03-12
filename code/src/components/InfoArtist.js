import React from 'react'

export const InfoArtist = (props) => {
    if (typeof props.artist === "object") {
        const firstArtist = props.artist[0].name;
        const firstArtistURL = props.artist[0].external_urls.spotify
        const lastArtist = props.artist[props.artist.length - 1].name
        const lastArtistURL = props.artist[props.artist.length - 1].external_urls.spotify
        const middleArtists = props.artist.slice(1, -1)

        let allArtists = [<a key={firstArtistURL} className='info-artist' href={firstArtistURL} target='_blank' rel="noopener noreferrer">{firstArtist}</a>]

        for (let artist of middleArtists) {
            allArtists.push(", ")
            allArtists.push(<a key={artist.external_urls.spotify} className='info-artist' href={artist.external_urls.spotify} target='_blank' rel="noopener noreferrer">{artist.name}</a>);
        }

        if (props.artist.length > 1) {
            allArtists.push(" & ")
            allArtists.push(<a key={lastArtistURL} className='info-artist' href={lastArtistURL} target='_blank' rel="noopener noreferrer">{lastArtist}</a>)
        }

        return <p> {allArtists} </p>
    } else {
        return null
    }
}
