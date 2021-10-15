import React from "react";

const generateDelimiter = (index, length) => {
	if (index === length - 2) {
		return " & ";
	} else if (index < length - 2) {
		return ", ";
	}
	return;
};

export const Artists = (props) => {
	const { arrayOfArtists } = props;
	return (
		<div className="artists-container">
			{arrayOfArtists.map((artist, index) => {
				return (
					<a key={artist.id} href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
						<span className="album-artist">
							{artist.name}
							{generateDelimiter(index, arrayOfArtists.length)}
						</span>
					</a>
				);
			})}
		</div>
	);
};
