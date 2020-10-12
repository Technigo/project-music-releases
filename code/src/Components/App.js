import React from 'react';
import data from '../data.json';
import { Album } from './Album.js';
import { Heading } from './Heading';
//import { Heading } from '/Heading.js';

/*loggar ut json*/
//console.log(data);

/*loggar ut item array i albums*/
//console.log(data.albums.items);

const albums = data.albums;
//console.log(albums);

//creates a new array of albums
const albumArray = albums.items;
console.log(albumArray);

//loopar över nya arrayen för att logga ut
// albumArray.forEach(album => {
// 	console.log(album.name); //album name
// 	console.log(album.images[1].url); //images of album
// 	console.log(album.external_urls.spotify); //url to album url

// 	const artistArray = album.artists;
// 	artistArray.forEach(artist => {
// 		console.log(artist.name); //artist/artists name
// 		console.log(artist.external_urls.spotify); //each artist external url
// 	});
// });

export const App = () => {
	// return (
	// 	<header className="heading">
	// 		<Heading />
	// 	</header>
	// )
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
								key={album.name} //printa ut albumnamn i DOM
								name={album.name} //printa ut albumnamn i DOM
								image={album.images[1].url} //printa ut albumImage i DOM
								albumUrl={album.external_urls.spotify} //printa ut albumURL i DOM
								artists={album.artists} //skickar med hela artistarrayen 
							/>)
					})
				}
			</section >
		</>
	)
};

// () inside return to return several lines. 
// if no () is used, <section needs to start on the same line as return
// but that is not clean