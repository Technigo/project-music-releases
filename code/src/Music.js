import React from 'react';
import { Artist } from './Artist';

export const Music = (props) => {
	console.log(props);
	return (
		<>
			<div>
				<img src={props.image} alt="" />
				<a href={props.albumUrl} target="_blank" rel="noopener noreferrer">
					<p>{props.albumName}</p>
				</a>
			</div>
			<div>
				{props.artistName.map((item) => {
					return (
						<Artist
							key={item.id}
							artistName={item.name}
							artistUrl={item.external_urls.spotify}
						/>
					);
				})}
			</div>
		</>
	);
};
