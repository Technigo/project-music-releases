import React from "react";
import { Icons } from "./Icons";
import { Artists } from "./Artists";

export const Album = (props) => {
	const { arrayOfArtists } = props;
	return (
		<section>
			<div className="album-image-container">
				<div className="album-cover-overlay">
					<Icons />
				</div>
				<img className="album-image" src={props.src} alt="album-cover" />
			</div>

			<a href={props.titleUrl} target="_blank" rel="noopener noreferrer">
				<h2 className="album-title">{props.title}</h2>
			</a>
			<Artists key={arrayOfArtists.id} arrayOfArtists={arrayOfArtists} />
		</section>
	);
};
