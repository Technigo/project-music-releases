import React from 'react';
import data from './data.json';

import Album from './components/Album';
import Header from './components/Header'

export const App = () => {
	return (
		<main className="main-container">
			<Header/>
			{data.albums.items.map((item) => (
				<Album
					img={item.images[1].url}
          			albumLink={item.external_urls.spotify}
					album={item.name}
					artists={item.artists}
				/>
			))}
		</main>
	);
  };