import React from 'react';
import data from './data.json';
import { Header } from './Header';
import { Footer } from './Footer';
import { Singles } from './Singles';
import { Artist } from './Artist';
import { Albums } from './Albums';

export const App = () => {
	console.log(data.albums.items);

	return (
		<>
			<Header />
			<main>
				<section className="main-section">
					<h2>New singles</h2>
					{data.albums.items.map((item) => (
						<Singles
							key={item.id}
							releaseDate={item.release_date}
							type={item.album_type}
							image={item.images[1].url}
							albumName={item.name}
							albumUrl={item.external_urls.spotify}
							artistName={item.artists}
						/>
					))}
				</section>
				<h2>New albums</h2>
				<section className="main-section">
					{data.albums.items.map((item) => (
						<Albums
							key={item.id}
							releaseDate={item.release_date}
							type={item.album_type}
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
