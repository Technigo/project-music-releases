export const ArtistName = props => {

    return (
        <div className="artist-name-container">
            {/* Here we're using map because props.artists is an array, and we need to return a separate link for each artist. */}
            {props.artists.map((artist, index) => {
                return <a key={index} className="artist-name" target="_blank" href={artist.external_urls.spotify}>{artist.name}
                </a>
            })}
        </div>
    )        
}