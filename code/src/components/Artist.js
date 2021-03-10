import React from 'react'


const Artist = (props) => {
    return(
        <div>
            {props.item.artists.map((artist, index) => {
                return (

                    <a target="_blank" rel="noopener noreferrer" href={artist.external_urls.spotify} key={artist.id} className="artist-container"> 
                        <h3 className="artist-name">
                            {artist.name}
                            {/* {generateDelimiter(index, props.item.artists.length)} */}

                        </h3>
                    </a>
                )
                
            })}
        </div>
    )
}

// const generateDelimiter = (index, length) => {
//     if (index === length - 2) {
//       return " & ";
//     } else if (index < length - 2) {
//       return ", ";
//     }
//     return;
//   };

export default Artist
  
