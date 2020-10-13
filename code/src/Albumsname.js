import React from 'react';
// import data from  './data.json';

// console.log(data.albums.items[0].name);


export const Albumsname = props => {
  console.log("We want album name:", props)
    return (
     
             <div className="albumsname">{props.name}</div>
             // < Albumsname />
     
    );
  }