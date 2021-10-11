import React from "react"

const Albums = (props) => {
  return (
    <article>
      <h2>{props.album}</h2>
    </article>
  )
}

export default Albums

// const musicArray = data.albums.items
// console.log("MUSIC ARRAY", musicArray

// export const MusicContainer = () => {
//   musicArray.map((albums) => {
//     return (
//       <div>
//         <Albums
//           image={albums.items.image}
//           album="ALBUM"
//           artist={albums.items.name}
//         />
//       </div>
//     )
//   })
//   return <Albums />
// }
// console.log("AFTER MAP", MusicContainer)
