import React from 'react';
import './Playlist.css';

export const Playlist = props => {
	return (
		<article className="playlist-wrapper">
			<img className="playlist-image" src={props.image} alt="Playlist cover" />
			<a href={props.playlistUrl} className="playlist-title">
				{props.name}
			</a>
		</article>
	);
};
