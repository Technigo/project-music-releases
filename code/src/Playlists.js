import React from 'react';

export const Playlists = (props) => {
	return (
		<div>
			<a href={props.playListUrl}>{props.playListName}</a>
		</div>
	);
};
