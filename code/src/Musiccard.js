import React from 'react';
import { MusicImage } from './card-component-directory/MusicImage';
import { MusicAlbum} from './card-component-directory/MusicAlbum';
import { MusicArtist} from './card-component-directory/MusicArtist';


// MusicCard component for the music item which will house the album image, album title and artist name
export const MusicCard = (prop) => {
    return (
        <div className="music-card-container">
            {/* Here we're only creating one album, accessing the array information for each of the elements inside the 
            card which will then be able to be accessed in their respective component files e.g MusicImage,
            MusicAlbum and MusicArtist to then further specify which part of these we want to use in that
            component folder */}
            <MusicImage image={prop.item.images}/>
            <MusicAlbum albumname={prop.item.name} albumlink={prop.item.external_urls}/>
            <MusicArtist artistsname={prop.item.artists}/>
        </div>       
    );
};


