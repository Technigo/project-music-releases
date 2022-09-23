import React from 'react';


export const Artist = (props) => {
    console.log(props.data);
return (
    <>
    <div>
      {props.data.artists.map((artist, index) => {
           return (
           <a className='grey'
           target="_blank"
           rel="noopener noreferrer"
           href={artist.external_urls.spotify}
           key={artist.id}>
           {artist.name}
           <span>{(props.data.artists.length - 1 > index) ? ((props.data.artists.length - 2 === index) ? ' & ' : ', ') : ''}</span>
           </a>
           )
      }
       
      )}
      
      </div>
    </>
);
}
