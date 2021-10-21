import React from 'react';

const Artists = (props) => {
	return <a href={props.artistLink} target="_blank" rel="noopener noreferrer" className="artists">{props.artistName}</a>
};

export default Artists;
