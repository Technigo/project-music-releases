import React from 'react';
import data from './data.json';

import { Footer } from './Footer';
import { Music } from './Music';
import { Artist } from './Artist';

export const App = () => {
	return (
		<>
			<main>
				<h1>New albums and singles</h1>
				<section className="main-section">
					{data.albums.items.map((item) => (
						<Music
							key={item.id}
							image={item.images[1].url}
							albumName={item.name}
							albumUrl={item.external_urls.spotify}
							artistName={item.artists}
						/>
					))}
				</section>
			</main>

			<Footer />
		</>
	);
};
console.log(data.albums.items);
