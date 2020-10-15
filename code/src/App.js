import React from 'react'
import data from './data.json'
import Header from './Header'
import { Albumcontainer } from './Albumcontainer'

// const artistsWithComma = artists.join(', ');
// const artistsarray = artists.map(e => e.name).join(' ');
export const App = () => {
//   const dataartist = data.items.artists.name;
// const artistcomma = dataartist.map(item=>item.join(', '));
  return (
    <> 
    <div className="headermain">
      < Header /></div>
      <article className="main">
        {data.albums.items.map(album=>{return <Albumcontainer key={album.id} 
        name={album.name} 
        linkAlbum={album.external_urls.spotify} 
        image={album.images[0].url}
        artists={album.artists}
        // artists={album.artists.map(e=>e.artist).join(', ')}
        />
        })}
        </article>
    </>
  );
}