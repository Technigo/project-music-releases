import React from 'react'
import data from './data.json'
import Article  from './components/Article'
import  Header from './components/Header'



export const App = () => {
	return (
		<>
			<Header />
			<section id="album-container">

			{data.albums.items.map((album) => (
				<Article
				  key={album.artist}
					albumTitle={album.name}
					albumCover={album.images[1].url}
          			albumLink={album.external_urls.spotify}
					playIconURL={album.external_urls.spotify}
					artistName={album.artists[0].name} 
					artists={album.artists} 
					
					
				/>
			))}
			  </section>
		</>
	);
};
