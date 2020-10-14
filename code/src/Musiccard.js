import React from 'react';
import { Musicimage } from './card-component-directory/Musicimage';
import { Musicalbum} from './card-component-directory/Musicalbum';
import { Musicartist} from './card-component-directory/Musicartist';


// Component for the music item which will house the album image, album title and artist name
export const Musiccard = (prop) => {
    return (
        <div className="music-card-container">
            {/* Here we're only getting one album, album name and artist name */}
            <Musicimage image={prop.item.images}/>
            <Musicalbum albumname={prop.item.name} albumlink={prop.item.external_urls}/>
            <Musicartist artistsname={prop.item.artists}/>
        </div>       
    );
};


