import { AlbumCover } from "./AlbumCover"
import { AlbumName } from "./AlbumName"
import { ArtistName } from "./ArtistName"

export const Albums = props => {
    return (
        <>
            {/* Looping over the albums array to generate an album container for each album. */}
            {props.data.map(album => {
                // Here we're extracting the image with a height of 300px.
                const albumCover = album.images.find(image => image.height===300)
                // The artists variable is an array that can contain between 1-3 artist objects.
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