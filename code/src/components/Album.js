 import React from 'react';
 import Artist from './components/Artist';


 const Album = (props) => {
   console.log('aleksa', props);
   return (
     <article className="album-item">
       <img className="cover-image" src={props.image}></img>
       <h2 className="album-name"> {props.title}</h2>
       <div className="artist-name">
        {props.artistName.map((artist) => (
          <Artist artistName={artist}
          artistName = {item.artists.name}/>
        ))}
       </div>
     </article>
   );
 };
 

 export default Album;
