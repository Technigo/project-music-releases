import React from 'react';

const signsBetween = (index, artists) => {
	if (index === artists.length - 1) {
		return null;
	}
	if (index === artists.length - 2) {
		return <span className="artist-name"> & </span>;
	} else {
		return <span className="artist-name">, </span>;
	}
};

export const Artist = (props) => {
	return (
		<span className="artist">
			<a
				className="artist-name"
				href={props.artistUrl}
				target="_blank"
				rel="noopener noreferrer">
				{props.artistName}
			</a>
			{signsBetween(props.index, props.array)}
		</span>
	);
};
