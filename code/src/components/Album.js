import React from 'react';
import Artists from './Artists';

{/* html for image and album/song name */}
const Album = (props) => {
	return (
		<article className="article">
			<div className="image-container">
				<a href={props.albumLink}>
					<div className="overlay"></div>
					<img 
						className="album-image"
						src={props.img} 
						alt="album cover"
					/>
				</a>
			</div>
			<a className="album-link" href={props.albumLink}>
				<h2 className="album-name">{props.album}</h2>
			</a>
            <div className="artists-container">
				{props.artists.map((artist) => (
					<Artists 
						key={artist.name} 
						artistName={artist.name} 
						artistLink={artist.external_urls.spotify}
					/>
				))}
			</div>
		</article>
	);
};

export default Album;