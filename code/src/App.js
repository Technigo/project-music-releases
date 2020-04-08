import React from 'react'
import data from './data.json'
import { Play, Dots, Heart } from './icons/Icons'
import { Header } from './components/Header'

console.log(data)

export const App = () => {
  return (
    <div>
      <Header />
      <hr className="separator"></hr>
    </div>



    // <div>
    //   <Play />
    //   <Dots />
    //   <Heart />

    // </div>
  )
}
