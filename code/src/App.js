import React from 'react';
import data from './data.json';
import { Header } from './Header';
import { Footer } from './Footer';
import { Singles } from './Singles';
import { Albums } from './Albums';
import { AsidePlaylists } from './AsidePlaylists';
import stretchGoal from './stretch-goal.json';

export const App = () => {
	console.log(data.albums.items);

	return (
		<>
			<Header />
			<main>
				<div>
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
				</div>
				<div className="aside-playlist">
					{stretchGoal.playlists.items.map((item) => (
						<AsidePlaylists
							key={item.id}
							playListName={item.name}
							playListUrl={item.external_urls.spotify}
							playListImage={item.images[0].url}
						/>
					))}
				</div>
			</main>

			<Footer />
		</>
	);
};
