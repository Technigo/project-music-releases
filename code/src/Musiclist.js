import React from 'react';
import { MusicCard } from './MusicCard';

// Prop contains all of the items_array information
// Map is accessing each of the array elements and using the iterateAlbums
// function to pass that into the arrayelement parameter, which then
// inserts each array element into the Musicitem div
export const MusicList = (prop) => {

// MusicCard component for the main container which will house the different music items
    const iterateAlbumsItems = (arrayelement) => {
        return (
            <MusicCard item={arrayelement} key={arrayelement.id}/>
        );
    };

    return (
        <section className="music-list-container">
            {prop.item_array.map(iterateAlbumsItems)}
        </section>
    );

};
