import React from 'react'

import data from './data.json'

import Album from './component/Album'

// import Header from './components/Header'


console.log('Data', data)

export const App = () => {
  return (
	  
		<section className="album-card-container"> 
			{data.albums.items.map((item) => (
				<Album 
				key={item.id} item={item}
				/> 
			))}
		</section>
   )
}



// we need to add key and should get the above inside album tag from this:
// key={item.id} item={item}

// img={item.images[1].url}
// albumTitle={item.name}
// albumLink={item.external_urls.spotify}
// artistName={item.artists[0].name}


// import Album from 'component/Album';
// import Artist from 'component/Album';

// import React from 'react';
// import data from './data.json';

// console.log(data)

// export const App = () => {
//   return (
//     <section>
//     <div className="album-box">
//     {data.albums.items.map((singleAlbum) => {
//           <Album 
//             key={singleAlbum.id} 
//             albumDetails={singleAlbum}/>
//             })}
//         {data.album.artists.map((artist) => (
//           <Artist
//             key={artist.id}
//             name={artist.name}
//             url={artist.external_urls.spotify}
//           />
//           ))}
//         </div>
//     </section>
//   )
// }
