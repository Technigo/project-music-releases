import React from 'react';

const Artists = (props) => {
	return <a href={props.artistLink} className="artists">{props.artistName}</a>
};

export default Artists;
