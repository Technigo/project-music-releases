import React from 'react'
import Image from 'components/Image'
import Album from 'components/Album'
import Artist from 'components/Artist'
import { render } from 'react-dom'


//console.log(data.albums.items[0].artists[0].id)

const Albumwrapper2 = (props) => {
  console.log({testar:props.albumWrap.albums.items.album_type})
  const test = props.albumWrap.albums.items

  return (  
    test.map(y => {
    return ( 
      <p>{y.album_type}</p>
    )
  })
)


/*
  return (  
    test.map(y => {
    return ( 
      <p>{y.album_type}</p>
    )
  })
)
*/

    
  
}


export default Albumwrapper2