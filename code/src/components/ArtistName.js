//Just nu syns alla artister längst ner på sidan från denna fil.


import React from 'react' 

const ArtistName = (props) => {

    console.log(props)
    return (
            <a className='artist-name' href={props.artist.external_urls.spotify}>
            {props.artist.name}
            </a>
    )
}

export default ArtistName;

