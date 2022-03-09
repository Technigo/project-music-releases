import React from 'react'

import data from './data.json'

import Album from './components/Album'


console.log('Data', data)

export const App = () => {
  return (
		<section> 

			{data.albums.items.map((item) => (
				<Album 
					img={item.images[1].url}
					albumTitle={item.name}
					albumLink={item.external_urls.spotify}
					//artistLink={item.artists[0].external_urls.sporify}
					artistName={item.artists[0].name}
				/>

				
			))}
        
		</section>
   )
}

