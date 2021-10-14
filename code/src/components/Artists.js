import React from 'react';

{/* html showing artist names */} 
const Artists = (props) => {
	return <a href={props.artistLink} className="artists">{props.artistName}</a>
};

export default Artists;
