import React from 'react'
import data from './data.json'
import { Map } from './components/Map'
import { Header } from './components/Header'

console.log(data);

export const App = () => {
  return (
    <section className="main-view">
      <Header />
      <Map />
    </section>
  )
}