import React from 'react'
import data from './data.json'
import { Album } from './Spotify'
import { Person } from './Person'
import { albumNew } from './Music'

console.log(data)
console.log("music", albumNew)

export const people = [ 
  {
   name: 'sara',
   pet: 'cat',
   eyeColor: 'blue'
  },

  {
      name: 'ebba',
      pet: 'dog',
      eyeColor: 'brown'   
  },

  {
      name: 'calle',
      pet: 'rabbit',
      eyeColor: 'green'   
  }
];

export const App = () => {
  return (
    <div>
      <Album name="sara"/>

      {people.map((person) =>  {
        return <Person key={person.name} name={person.name} pet={person.pet} eyeColor={person.eyeColor} />
      })}

{albumNew.map((album) =>  {
        return <Album key={album.name} name={album.name} artist={album.artist} />
      })}

    </div>
  )
}

