import React from 'react';

export const Playlists = (props) => {
	return (
		<div className="playlist-links">
			<a href={props.playListUrl} target="_blank" rel="noopener noreferrer">
				{props.playListName}
			</a>
		</div>
	);
};
