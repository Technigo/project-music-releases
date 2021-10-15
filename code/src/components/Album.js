import React from "react";
import { Icons } from "./Icons";
import { Artists } from "./Artists";

export const Album = (props) => {
	const { arrayOfArtists } = props;
	return (
		<div>
			<div className="album-image-container">
				<div className="album-cover-overlay">
					<Icons />
				</div>
				<img className="album-image" src={props.src} alt="album-cover" />
			</div>

			<div className="album-artist-title-container">
				<a className="album-title" href={props.titleUrl} target="_blank" rel="noopener noreferrer">
					{props.title}
				</a>
				<Artists arrayOfArtists={arrayOfArtists} />
			</div>
		</div>
	);
};
