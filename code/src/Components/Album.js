import React from 'react';
import { Artist } from './Artist.js';
import './Album.css';
export const Album = (props) => {
	return <div className="album-wrapper">
		<h1>Album Name: {props.name}</h1>
		<img className="album-image" src={props.image} alt="Album cover" />
		<p>Album URL: {props.albumUrl}</p>
		<div className="artist-container">
			{props.artists.map(artist => {
				return (
					<Artist name={artist.name}
						key={artist.name}
						artistUrl={artist.external_urls.spotify} />)
			})

			}

		</div>
	</div>
};
