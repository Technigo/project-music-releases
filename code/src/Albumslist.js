import React from'react';
import Album from './Album'
import data from './data.json'

console.log(data.albums.items[0].artists[0].name)
const album0 = data.albums.items[0]

const Albumslist = () =>{
        return (  
            <section className="albumlist-section">
            <Album albumArtist= {album0.artists[0].name} albumTitle = {album0.name} albumImg={album0.images[1].url}/> 
            <Album albumArtist = {album0.artists[0].name} albumTitle = {album0.name} albumImg={album0.images[1].url}/> 
            <Album albumArtist = {album0.artists[0].name} albumTitle = {album0.name} albumImg={album0.images[1].url}/> 
            <Album albumArtist = {album0.artists[0].name} albumTitle = {album0.name} albumImg={album0.images[1].url}/> 

            </section>
        );
}
       

export default Albumslist;
