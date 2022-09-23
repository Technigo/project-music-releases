import React from 'react';
const Artists = ({artist}) => {
 return ( //return och div längst ut
  <div>
    {artist.map((artist) => {
  return (  
<div>
 {artist.name}
 {artist.href}
  </div>
  )
  })}
  </div>
 )
}

export default Artists;

/*
 <img className="albumImage" src={coverImage} alt="album cover" />
<a href={albumUrl}>
<img className="playIcon icon" src="./icons/play.svg" />
</a>
*/

/*
console.log('artistT ', artist)
<div>  
artist.map((artist) => {
  return (  

 {artist.name}
  </div>
  )
}
)

*/