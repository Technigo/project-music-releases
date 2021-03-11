import React from 'react';

// const AlbumCover = (props) => {
//   return (
//     <div className="album-cover">
//       <div className="album-img">
//         <img src={props.item.images[1].url} alt="Album cover"></img>
//         <div className="icons-overlay">
//           <div className="icons">
//               <img className="icon-heart" src= "./icons/heart.svg"></img>
//               <img className="icon-play" src= "./icons/play.svg"></img>
//               <img className="icon-dots" src= "./icons/dots.svg"></img>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }








const AlbumCover = (props) => {
  return (
    <div className="album-cover">
      <div className="album-img">
        <img src={props.item.images[1].url} alt="Album cover"></img>

          <div className="icons">
              <img className="icon-heart" src= "./icons/heart.svg" alt="heart icon"></img>
              <img className="icon-play" src= "./icons/play.svg" alt="play-icon"></img>
              <img className="icon-dots" src= "./icons/dots.svg" alt="dots-icon"></img>
          </div>

      </div>
    </div>
  );
}

export default AlbumCover;