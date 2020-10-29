import React from 'react';
import data from '../data.json';
import stretchGoal from '../stretch-goal.json';
import { Album } from './Album';
import { Heading } from './Heading';
import { Playlist } from './Playlist';
import './App.css';

const albumArray = data.albums.items;
const playlistArray = stretchGoal.playlists.items;

export const App = () => {
	return (
		<>
			<Heading />
			<section className="content-wrapper">
				<div className="albums-container">
					{albumArray.map(album => {
						return (
							<Album
								key={album.id}
								name={album.name}
								image={album.images[1].url}
								albumUrl={album.external_urls.spotify}
								artists={album.artists}
							/>
						);
					})}
				</div>
				<div className="playlist-container">
					{playlistArray.map(playlist => {
						return (
							<Playlist
								key={playlist.id}
								image={playlist.images[0].url}
								playlistUrl={playlist.external_urls.spotify}
								name={playlist.name}
							/>
						);
					})}
				</div>
			</section>
		</>
	);
};
