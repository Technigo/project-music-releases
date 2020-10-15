import React from 'react';
import { Artist } from './Artist';

export const Music = (props) => {
	console.log(props);
	return (
		<>
			<div>
				<img src={props.image} alt="" />
				<p>{props.albumName}</p>
			</div>
			<div>
				{props.artistName.map((item) => {
					return <Artist key={item.id} artistName={item.name} />;
				})}
			</div>
		</>
	);
};
