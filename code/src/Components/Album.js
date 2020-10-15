import React from 'react';
import { Artist } from './Artist';
import { Icons } from './Icons';
import './Album.css';

export const Album = props => {
	return (
		<>
			<article className="album-wrapper">
				<div className="image-wrapper">
					<img className="album-image" src={props.image} alt="Album cover" />
					<Icons />
				</div>
				<a href={props.albumUrl} className="album-title">
					{props.name}
				</a>

				<div className="artist-wrapper">
					{props.artists.map(artist => {
						return (
							<Artist
								key={artist.id}
								name={artist.name}
								artistUrl={artist.external_urls.spotify}
							/>
						);
					})}
				</div>
			</article>
		</>
	);
};
