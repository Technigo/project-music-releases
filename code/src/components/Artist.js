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

// This was our first approach but we had a problem that the .join was also adding commas between 
// the links when there was more than one artist and then we saw this thread on SO 

// export const Artist = (props) => {
//     const getArtistNames = (artists) => {
//         return artists.map((artist) => artist.name).join(", ");
//     }
//         const getAlbumUrl = (artists) => {
//             return artists.map((artist) => artist.external_urls.spotify)
//     }
//     return (
//         <div className='artist-name'>
//             {getArtistNames(props.item.artists)}
//             <a href={getAlbumUrl(props.item.artists)}/>
//         </div>
//     )
//   };
