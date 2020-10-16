import React from 'react';
import { Artist } from './Artist';
import { ReactComponent as PlayButton } from './play.svg';
import { ReactComponent as HeartButton } from './heart.svg';
import { ReactComponent as DotButton } from './dots.svg';

export const Music = (props) => {
	console.log(props);
	return (
		<>
			<section className="music-section">
				<div className="album-container">
					<div className="album-image-container">
						<a
							className="album-name"
							href={props.albumUrl}
							target="_blank"
							rel="noopener noreferrer">
							<img src={props.image} alt="" />

							<div className="icon-container">
								<HeartButton className="heart-button" />
								<PlayButton className="play-button" />
								<DotButton className="dot-button" />
							</div>
						</a>
					</div>

					<a className="album-name" href={props.albumUrl}>
						{props.albumName}
					</a>
					{props.artistName.map((item) => {
						return (
							<Artist
								key={item.id}
								artistName={item.name}
								artistUrl={item.external_urls.spotify}
							/>
						);
					})}
				</div>
			</section>
		</>
	);
};
