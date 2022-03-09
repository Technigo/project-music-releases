import React from 'react'
import ArtistName from 'components/ArtistName'


const AlbumCard = ({name, image, props}) => {
    // console.log(props)
    // const { name, image } = props
    return (
        <section>
            
            <div className='album-border'>               
                <img src={image} alt="Album Cover" />
                <h1>{name}</h1>
                <h1>Josse ft {props.album.artists[0].name} and Lisen and Stephy</h1>
            </div>
           
            <div className='all-album-border'>
                {props.newReleases.map((singleArtist) => {
                return (<ArtistName artist={singleArtist} />
                )})}
                
             </div>

        </section>
    )
}

export default AlbumCard; 

/* <ArtistName artist={artist.artists[0].name} /> */