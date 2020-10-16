import React from 'react';

export const Artist = (props) => {
	return (
		<span>
			<a
				className="artist-name"
				href={props.artistUrl}
				target="_blank"
				rel="noopener noreferrer">
				{props.artistName}
			</a>
		</span>
	);
};

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
