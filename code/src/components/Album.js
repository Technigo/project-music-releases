import React from 'react';

export const Album = (props) => {
	return (

		//Vi har en artikel med olika klasser. Props.link är länken till albumet på Spotify
		//props.image.url är länken till omslaget
		<article className="album-cards">
			<a className="album-container" href={props.link} target="_blank" rel="noopener noreferrer">
				<img className="album-image" src={props.image.url} alt="image of album"></img>
			</a>


			{/* En props med länk och namn på albumbet */}
			<a className="album-text" href={props.link} target="_blank" rel="noopener noreferrer">
				{props.name}
			</a>

			{/* En props med artist-namn. Och vi använder .map för att rendera ut varje artist  */}
			<div className="artist-text-container">
				{props.artists.map(artist => {
					return (
						< a className="artist-text" href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
							{artist.name}
							<span>,&nbsp;</span> 
							{/* https://stackoverflow.com/questions/18753828/keeping-a-string-of-text-together-on-one-line%20 */}
						</a>)
				})}
			</div>
		</article>

	)
}


// Länkar som jag läst igenom och skrivit kod utifrån
// https://stackoverflow.com/c/technigo/questions/285
// https://stackoverflow.com/c/technigo/questions/869
// https://stackoverflow.com/c/technigo/questions/301/302#302
// https://www.notion.so/Week-9-Music-releases-review-34baf8a0a22e466085dae9ad52d66f24


// https://stackoverflow.com/c/technigo/questions/2243
// https://stackoverflow.com/c/technigo/questions/1671




export default Album;
