import React from 'react';
import { MusicImage } from './card-component-directory/MusicImage';
import { MusicAlbum} from './card-component-directory/MusicAlbum';
import { MusicArtist} from './card-component-directory/MusicArtist';


// MusicCard component for the music item which will house the album image, album title and artist name
export const MusicCard = (prop) => {
    return (
        <div className="music-card-container">
            <MusicImage image={prop.item.images}/>
            <MusicAlbum albumname={prop.item.name} albumlink={prop.item.external_urls}/>
            <MusicArtist artists={prop.item.artists}/>
        </div>       
    );
};
    /* Here we're only creating one template card for each of the 50 artists */

    /* In each of the componenet paths above we're accessing, via the prop, the item prop we 
    defined in the previous component. This is in essence the items array and from that we 
    are accessing the object properties that we want to filter further in the specific components MusicImage,
    MusicAlbum and MusicArtist. We're then putting these in to new props to the be accessed in the next component
    cards */


