import React from 'react';
import data from '../data.json';
import { Album } from './Album';
import { Heading } from './Heading';

//console.log(data);

const albums = data.albums;
//console.log(albums);

//creates a new array of albums
const albumArray = albums.items;
//console.log(albumArray);

/*
albumArray.forEach(album => {
console.log(album.name); //album name
console.log(album.images[1].url); //images of album
console.log(album.external_urls.spotify); //url to album url

const artistArray = album.artists;
	artistArray.forEach(artist => {
	console.log(artist.name); //artist/artists name
	console.log(artist.external_urls.spotify); //each artist external url
	});
});
*/

export const App = () => {
	return (
		<>
			<header className="heading">
				<Heading />
			</header>
			<section className="albums-container" >
				{
					albumArray.map(album => {
						return (
							<Album
								key={album.name}
								name={album.name}
								image={album.images[1].url}
								albumUrl={album.external_urls.spotify}
								artists={album.artists}
							/>)
					})
				}
			</section >
		</>
	)
};