import React from 'react';
import Artist from './Artist'
import Album from './Album'

const Card = (props) => {
    console.log(props.data)
  
    return (
    <>
    <h2>
      {props.data.name}
    </h2>
  
    {data.albums.items.map (item => {
  return <Card key={data.id} data = {item}/>
    })}
    
     {props.data.artists.map (item => {
      <Artist data = {item}/>
     })}/>
    
    </>
  );
}

export default Card;