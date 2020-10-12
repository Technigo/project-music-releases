import React from 'react'
import data from './data.json'
import Header from './Header' 
import Main from './Main'

console.log(data)

export const App = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  )
}
