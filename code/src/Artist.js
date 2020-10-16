import React from 'react';

export const Artist = (props) => {
	return (
		<div>
			<a href={props.artistUrl} target="_blank" rel="noopener noreferrer">
				{props.artistName}
			</a>
		</div>
	);
};
