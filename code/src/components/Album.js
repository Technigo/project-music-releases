import React from 'react';

import { Icons } from '../components/Icons'

export const Album  = (props) => {

    return (
    <div className="card">
        <div className="img-container"> 
            <a href={props.href}  target="_blank" rel="noopener noreferrer">
                <img src={props.image} alt="" className="album-img" />
                <Icons />
            </a>
        </div>

        {/* album title*/}
        <a href={props.href}  target="_blank" rel="noopener noreferrer">
            <p className="albumTitle">{props.title}</p>
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