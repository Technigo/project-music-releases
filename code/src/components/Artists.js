import React from 'react';


const Artists= ({artist}) => {
 return ( //return och div längst ut
  <div>
    {artist.map((artist) => {
  return (  
<div>
 {artist.name}
  </div>
  )
  })}
  </div>
 )
}

export default Artists;



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