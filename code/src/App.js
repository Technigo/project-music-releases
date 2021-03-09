import React from 'react'
import data from './data.json'
import { Albums } from './Components/Albums'
import { Heading } from './Components/Heading'
import './App.css'

console.log(data)

export const App = () => {
  return (
    <>
      <div className='main-container'>
        <Heading />
        <section className='album-cards-container'>
          <div className='album-card'>
            <Albums />
          </div>
        </section>
      </div>
      
    </>
  )
}
