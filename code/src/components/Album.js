import React from 'react';
import Artists from './Artists'

{/* html for image and album/song name */}
const Album = (props) => {
	return (
		<article className="article">
           <a href={props.albumLink}>
				<img 
					src={props.img} 
					alt="album cover"
				/>
			</a>
			<a href={props.albumLink}>
				<h2>{props.album}</h2>
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