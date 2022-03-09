//Just nu syns alla artister längst ner på sidan från denna fil.


import React from 'react' 

const ArtistName = (props) => {

    console.log(props)
    return (
        <section>
            <div>
            <h1>{props.artist}</h1>
            </div>
        </section>
    )
}

export default ArtistName;

//
// const fetchArtist = data.albums.items

// const ArtistName = () => {
//  return (
//     <div>
//         {fetchArtist.map((artist) => {
//           return <SpotifyTest artist={artist[0].name} />
//         })}
//     </div>
//  )
// }