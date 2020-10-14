import React from 'react';
import data from './data.json';

export const MusicCard = (props) => {
	return (
		<section>
			<div>
				<img src={props.image} alt="" />
			</div>
			<div>Album</div>
			<div>Artist</div>
		</section>
	);
};

console.log(MusicCard);
