import React from 'react';
import { Artist } from './Artist';
import { ReactComponent as PlayButton } from './play.svg';
import { ReactComponent as HeartButton } from './heart.svg';
import { ReactComponent as DotButton } from './dots.svg';

export const Albums = (props) => {
	if (props.type === 'album') {
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

						<div className="release-tooltip-container">
							<a className="album-name" href={props.albumUrl}>
								{props.albumName}
							</a>
							<span className="release-date-tooltip">
								<p>Release date:</p>
								<p>{props.releaseDate}</p>
							</span>
						</div>
						<div className="artist-container">
							{props.artistName.map((item, index, array) => {
								return (
									<Artist
										key={item.id}
										index={index}
										array={array}
										artistName={item.name}
										artistUrl={item.external_urls.spotify}
									/>
								);
							})}
						</div>
					</div>
				</section>
			</>
		);
	} else {
		return null;
	}
};
