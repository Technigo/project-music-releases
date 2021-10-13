import React from 'react';

{/* html showing artist names */} 
const Artists = (props) => {
	return <a href={props.artistLink} className="Artists">{props.artistName}</a>
};

export default Artists;
