import React from 'react';

export const AsidePlaylists = (props) => {
	return (
		<div className="aside-playlists-links">
			<a href={props.playListUrl} target="_blank" rel="noopener noreferrer">
				<img src={props.playListImage} alt={props.playListName} />
			</a>
		</div>
	);
};
