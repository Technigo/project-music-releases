# Music Releases

This project was to build a page which shows new album and single releases using React and creating components by data from Spotify.
It was a pair programming project made by Harry Bäcklin and Ida Aspen.

## The problem

The challenge was to structure the code and break down the project to different components which needed to be mounted for each album card.

## View it live

import React from 'react';

const Artist = (props) => {
return (
<div className="artist">
{props.item.artists.map((artist) => {
return (
<a key={artist.id} href={artist.external_urls.spotify}>
<h2 className="artist-name">
{artist.name}
<span>,&nbsp;</span>
</h2>
</a>
);
})}
</div>
// https://stackoverflow.com/c/technigo/questions/1666
);
};

export default Artist;
