import React from "react"

export const Images = (props) => (
  <div>
    <img src={props.image} alt="Album cover" />
  </div>

)

// {
//   return (
//     <div>
//       {data.albums.items.map((album) => {
//         return <div key={album.images[1].url}> <img src={album.images[1].url} alt='Album cover'></img></div>
//       })}
//     </div>
//   )
// }