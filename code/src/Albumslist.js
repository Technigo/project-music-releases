import React from'react';
import {Album} from './Album'
import data from './data.json'

const albums = data.albums.items;

export const Albumslist = () =>{
        return (  
            <div className="albumlist-section">
            {albums.map((albumElement) => {
              return <Album key={albumElement.name} 
                albumTitle={albumElement.name}
                albumImg={albumElement.images[1].url}
                albumArtist={albumElement.artists} 
              />
            })}
          </div>
          
        );
}


