import React from 'react';

export const Playlists = (props) => {
	return (
		<div className="playlist-links">
			<a href={props.playListUrl}>{props.playListName}</a>
		</div>
	);
};
