export const ArtistName = props => {
console.log(props.artists)
const artistArray = props.artists.length
    return (
        <div className="artist-name-container">
            {props.artists.map((artist, index) => {
                return <a className="artist-name" target="_blank" href={artist.external_urls.spotify}>{artist.name}
                <span>{artistArray === 2 && index !==artistArray -1 ? ' & ' : artistArray -1 > index ? ', ' : ''}</span>
                </a>
            })}
        </div>
    )        
}