import React from 'react';
import { MusicCard } from './MusicCard';
import data from './data.json';

const musicArray = data.albums.items;
console.log(musicArray);

export const MusicContainer = () => {
	musicArray.map((albums) => {
		return (
			<div>
				<MusicCard key={albums.id} image={albums.images[1].url} />
				<div>{albums.images[1].url}</div>
			</div>
		);
	});
};
