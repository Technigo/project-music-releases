export const ArtistName = props => {
console.log(props.artist)
    return (
        <a className="artist-name" target="_blank" href={props.artist.external_urls.spotify}>{props.artist.name}</a>
    )        
}