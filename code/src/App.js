import React from 'react'
import { Album } from './Album'
import { Header } from './Header'
import data from './data.json'
console.log(data)
const data2 = [
  { name: "Oves" },
  { name: "Nasses" },
  { name: "Mickeys" },
]


export const App = () => {
  return (
    <div>
      <Header />
      <section id="album-container">
        {data.albums.items.map((item) => {
          return <Album key={item.id} name={item.name} image={item.images[1].url} />
        })}
      </section>
    </div>
  )
}