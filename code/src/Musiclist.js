import React from 'react';
import { MusicCard } from './MusicCard';

export const MusicList = (prop) => {
    /* 2. Taking the iterated array into the iterateAlbumsItems function. Using the arrayelement argument to
    pass this into the item prop and in turn the MusicCard component. */
    const iterateAlbumsItems = (arrayelement) => {
        return (
            <MusicCard item={arrayelement} key={arrayelement.id}/>
        );
    };
    /* 1. Using prop to pass the items_array to the MusicList component. Map is iterating through this 
    array for each of the array elements as well as creating a copy of this array.
    And we use the iterateAlbumsItems function in the map parameter so we can pass that into that function. */
    return (
        <section className="music-list-container">
            {prop.item_array.map(iterateAlbumsItems)}
        </section>
    );
};
