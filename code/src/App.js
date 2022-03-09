import React from 'react'
import data from './data.json'

//V1 syntax on how to import: This example uses curly brackets {}
// Example:  import {Article} from 'components/Article';


//V2 syntax: without curly brackets
import AlbumCard from 'components/AlbumCard';
// import ArtistName from 'components/ArtistName';



console.log(data)

const newReleases = data.albums.items

export const App = () => {
  return (
    <section>

      <div className='all-album-border'>
        {newReleases.map((album) => {
          return <AlbumCard key={album.name} image={album.images[1].url}
          name={album.name} />
        })}
      </div>

    </section>
  )
}

/* <div>
{newReleases.map((album) => {
  return <ArtistName key={album.artists[0].name} artist={album.artists[0].name} />
})}
</div> */

// Nedan är kopia till SpotifyTest 

// return (
//   <div>
//     {newReleases.map((album) => {
//       return <SpotifyTest key={album.artist[0].name} name={album.artist[0].name}
//              image={album.images[1].url} />
//     })}
//   </div>

// )





//This const is connected to Test.js. Applied between import data and export
// const people = [
//   {name: 'Penny', title: 'Ms'},
//   {name: 'Kathy', title: 'Ms'},
//   {name: 'Eurica', title: 'Ms'}
// ]



//Nedan är kopia på övningar från live session

// return (
//   <section>
//     <Article 
//       title="Students of jan 2022 class seems to like React" 
//     description="According to newest studies, jan2022 class have spoken - React is the best framework/library to learn in 2022."
//     />
//     <Article 
//     title="This is second article"
//     description="Just another description"
//     />
//     <div className='title'>
//       {people.map((person) => {
//         return <Test key={person.name} name={person.name} title={person.title} />
//       })}
//     </div>
//     </section>
//     );






