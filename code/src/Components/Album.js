import React from 'react';
import { Artist } from './Artist.js';
import './Album.css';

export const Album = (props) => {
	console.log(props) //added 
	return <article className="album-wrapper">

		<img className="album-image" src={props.image} alt="Album cover" />
		<a href={props.albumUrl} className="albumTitle"><p>{props.name}</p></a>
		<div className="artist-container">
			{props.artists.map(artist => {
				return (
					<Artist name={artist.name}
						key={artist.name}
						artistUrl={artist.external_urls.spotify} />)
			})

			}

		</div>
	</article>
};


//maybe className album-wrapper should be inside an article tag?
//delete () around props?