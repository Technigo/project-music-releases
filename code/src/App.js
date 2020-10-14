import React from 'react'
import data from './data.json'
import Header from './Header'
import { Albumcontainer } from './Albumcontainer'

// const artistsWithComma = artists.join(', ');

export const App = () => {

  return (
    <> 
      < Header />
      <article>
        {data.albums.items.map(album=>{return <Albumcontainer key={album.id} 
        name={album.name} 
        linkAlbum={album.external_urls.spotify} 
        image={album.images[0].url}
        artists={album.artists.join(', ')}
         />
        })}
        </article>
    </>
  );
}