export const AlbumName = props => {

    return (
        <a className="album-name" target="_blank" href={props.url.spotify}>{props.name}</a>
    )        
}