import React from 'react'


export const Artist = (props) => {
    return (
        <div className='artist-name'>
            {
                props.item.artists.map((artist) => {
                    return <a 
                        key={artist.id} 
                        href={artist.external_urls.spotify}>
                             {artist.name}
                             <span>,&nbsp;</span>
                            </a>
                })
            }
        </div>
    )
}
