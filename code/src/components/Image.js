import React from 'react';
import data from './data.json';

console.log(data);
 // named export
/*const Image = () => {
  return (
      <>
      {/* <Header text = "testing the props"/> }
       {data.albums.items.images.map (image => {
          return image[0].url
       })} 
      </>
  );
}*/
/*export default Image;*/
//data = {item} text = "testing the props"
//<Image key=
//data = {image} text = "testing the props"/>

export const Image = () => {
    data.albums.items.map((albums) => {
        return (
            <div>
                <ImageCard key={albums.items.id} image={albums.items.images[1].url} />
                <div>{albums.items.images[1].url}</div>
            </div>
        );
    });
    return <ImageCard />
};