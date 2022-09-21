import React from "react";
import rData from "./data.json";
import Header from "./components/Header.js";
import Album from "components/Album.js";

// import Image from './components/Image.js';

console.log('Appdata', rData.albums.items);


export const App = () => {
   return (

<main>
<Header />

<div className="albumsWrapper">
    {rData.albums.items.map((album) => {
    console.log('album', album)
    return (
      <Album
                key={album.id}
                coverImage={album.images[0].url}
                albumName={album.name}
                albumUrl={album.external_urls.spotify}            
      />
    );
})}
</div>

</main> 
)
}
    
    
/*

// If you want to make the data prettier you can first do a cleanup

const albumList = rData.albums.items.map((album) => ({
  id: album.id,
  name: album.name,
  coverImage: album.images[0].url,
  url: album.external_urls.spotify,
}));

<div className="albumsWrapper">
   {console.log("albumList", albumList)}
    {albumList.map((album) => {
    console.log('album', album)
    return (
      <Album
                key={album.id}
                coverImage={album.coverImage}
                albumName={album.name}
                albumUrl={album.url}            
      />
    );
})}
</div>

*/
//     <>
//     <Header/>
//     <div className="Album">
//       {data.albums.items.map(item => {
//         return <div key={item.id}>
//           {item.name}</div>;
//       })}
//     </div>
  
    
//     { 
//     <div className="Image">
//       {data.albums.items.map(item => {
//         return <div key={item.id}>
//           {item.images[1].url}</div>;
//       })}
//     </div> }



//     </>

//   );
// };


// export const App = () => {
//   return (
//   <>
//     <Album/>
//     {data.album}
//   </>
//   );
// }