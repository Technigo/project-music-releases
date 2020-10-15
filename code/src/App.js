import React from 'react';
import data from './data.json';
import { Header } from './Header';
import { Footer } from './Footer';
import { Music } from './Music';
import { Artist } from './Artist';

export const App = () => {
	return (
		<>
			<Header />
			<main>
				{data.albums.items.map((item) => (
					<Music
						key={item.id}
						image={item.images[1].url}
						albumName={item.name}
						albumUrl={item.external_urls.spotify}
						artistName={item.artists}
					/>
				))}
			</main>
			<Footer />
		</>
	);
};
console.log(data.albums.items);
