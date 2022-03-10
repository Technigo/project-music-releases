import React from 'react'

import data from './data.json'

import Album from './components/Album'

import Header from './components/Header'


console.log('Data', data)

export const App = () => {
  return (
		<>
		<Header />
		<section className="album-wrapper"> 
			{data.albums.items.map((item) => (
				<Album 
				key={item.id} item={item}
				/> 
			))}
		</section>
		</>
   )
}



// we need to add key and should get the above inside album tag from this:
// key={item.id} item={item}

// img={item.images[1].url}
// albumTitle={item.name}
// albumLink={item.external_urls.spotify}
// artistName={item.artists[0].name}