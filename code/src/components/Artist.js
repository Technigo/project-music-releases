import React from 'react';

const Artist = (props) => {
	return (
		<div className="artist">
			<h2>{props.albumDetails.name}</h2> // albumDetails specad i AlbumList. singleAlbum ist?
		</div>
	);
};

export default Artist;