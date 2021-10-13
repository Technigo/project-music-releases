import React from 'react';

export const Album  = (props) => {
    console.log('PROPS', props)
 
    return (
    <div className="card">
        <a href={props.href}  target="_blank" rel="noopener noreferrer">
            <img src={props.image} alt="" className="album-img" />
            <p className="albumTitle">{props.title}</p>
            {/* <div className="icons-container">
                <img className="icon" src="./icons/heart.svg" alt="heart-icon"/>
                <img className="icon" src="./icons/play.svg" alt="play-icon" />
                <img className="icon" src="./icons/dots.svg" alt="dots-icon" />
            </div> */}
        </a>

        {/* ARTIST - we could create a component here, but this solution works as well  */}
        <div className="artistName">
			{props.album.map(artist => {
				return (
					<a className="artistLink" key={artist.id} href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
						{artist.name}
                    </a>)
				})}
		</div>
    </div>
    );
};