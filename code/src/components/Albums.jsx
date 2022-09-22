import { AlbumCover } from "./AlbumCover"
import { AlbumName } from "./AlbumName"
import { ArtistName } from "./ArtistName"

export const Albums = props => {
    console.log(props)
    return (
        <>
            {props.data.map(album => {
                const albumCover = album.images.find(image => image.height===300)
                const artists = album.artists
                const albumUrl = album.external_urls
                    return (
                        <div className="album-container" key={album.id}>
                            <AlbumCover image={albumCover}/>
                            <AlbumName url={albumUrl} name={album.name}/>
                            <ArtistName artists={artists} />
                        </div>
                    )
            })}
        </>
    )        
}