import React from 'react'
import { Artist } from 'components/Artist'


export const Album = (props) => {
    const albums = props.albums
    const listAlbums = albums.map((album) =>
        <div key={album.id} className='album'> 
            <img src={album.images[0].url} alt="album-img"/>

            <p><a href={album.external_urls.spotify}>{album.name}</a></p>
            <div>
                <Artist 
                artist = {album.artists}
                />
                
            </div>
        </div>
    )
    return (
        listAlbums
        )
}

/* <p>{album.artist}</p> */


// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) =>
//       <li key={number.toString()}>      {number}
//       </li>
//     );
//     return (
//       <ul>{listItems}</ul>
//     );
//   }
  
//   const numbers = [1, 2, 3, 4, 5];
//   ReactDOM.render(
//     <NumberList numbers={numbers} />,
//     document.getElementById('root')
//   );


