import React from 'react'
import ArtistName from 'components/ArtistName'
import Icons from 'components/Icons'

const AlbumCard = (props) => {
    // console.log('props', props)
    return (            
        <article className='album-container'>
            <div className='wrapper-for-children'>          
                <div className='overlay-relative'>
                    <img className='album-cover' src={props.newReleases.images[1].url} alt="Album Cover" />
                    <div className='overlay'>
                        <h2><Icons /></h2>
                    </div>    
                </div>

                <h2><a className='album-name' href={props.newReleases.external_urls.spotify}>{props.newReleases.name}</a></h2>
                <h2><a className='artist-name' href={props.newReleases.external_urls.spotify} target="_blank" rel="noopener norefferer">
                    {props.newReleases.artists.map(artist => {
                        return (
                            <ArtistName key={artist.id} artist={artist} />
                        )
                    })}
                </a></h2>
            </div> 
               
        </article>
    )
}

export default AlbumCard; 

