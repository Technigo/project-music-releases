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

// 	return (
// 		<span>
// 			<a
// 				className="artist-name"
// 				href={props.artistUrl}
// 				target="_blank"
// 				rel="noopener noreferrer">
// 				{props.artistName}
// 			</a>
// 		</span>
// 	);
// };

// 	if (props.length === 1) {
// 		return (
// 			<a href={props.artistUrl} target="_blank" rel="noopener noreferrer">
// 				<span className="artist-name">{props.artistName}</span>
// 			</a>
// 		);
// 	} else if {
// 		 (props.index < props.lenght - 1) {
// 		return (
// 			<a href={props.artistUrl} target="_blank" rel="noopener noreferrer">
// 				<span className="artist-name">{props.artistName}, </span>
// 			</a>
// 		);
// 	} else {
// 		return (
// 			<a href={props.artistUrl} target="_blank" rel="noopener noreferrer">
// 				<span className="artist-name">{props.artistName}</span>
// 			</a>
// 		);
// 	}
// };

// 			</a>
// 		);
// 	} else {
// 		return (
// 			<a href={props.artistUrl} target="_blank" rel="noopener noreferrer">
// 				<span className="artist-name">{props.artistName}</span>
// 			</a>
// 		);
// 	}
// };
