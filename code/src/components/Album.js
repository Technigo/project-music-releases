import React from 'react'
import Artist from './Artist'

const Album =(props)=> {
    const Albums = props.data.albums.items
    
    // console.log('Albums',Albums)
  return (
    <>
    <div className='container'>
    {Albums.map((item,key)=> 
    <div className='album-container' key = {item.id}>


    <div className='img-icon'>
      <img src={item.images[1].url} alt={item.name} width='100px' height='100px'/>
    <div className='icons-container'>
       <img src="heart1.png" alt="heart" width='20px' height='20px'/>
        <p>Hej</p>
        <p>HEjhej</p>
      </div>
    </div>


    <p > {item.name}</p>
    <Artist item = {item}/>
    </div>
)}
</div>
    </>
  )
}

export default Album