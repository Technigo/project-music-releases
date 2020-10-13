import React from 'react';
import { Musiccard } from './Musiccard';

// Component for the main container which will house the different music items

const iterateAlbumsItems = (arrayelement) => {
    return (
        <Musiccard item={arrayelement} key={arrayelement.id}/>
    );
};

// Prop contains all of the albums object information
// Map is accessing each of the array elements and using the iterateAlbums
// function to pass that into the arrayelement parameter, which then
// inserts each array element into the Musicitem div
export const Musiclist = (prop) => {
    return (
        <section>
            {prop.albums.items.map(iterateAlbumsItems)}
        </section>
    );
};
