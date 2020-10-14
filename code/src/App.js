import React from 'react'
import data from './data.json'
import {Header} from "./Header"
import {AlbumsContainer} from "./AlbumsContainer"
import {Artists} from "./Artists"
import {Albums} from "./Albums"
import {Icons} from "./Icons"

console.log(data)
console.log("data info", data)
console.log("data", data)


export const App = () => {
  return (
    <>
      <Header />
      <Albums />
      <Artists />
      <Icons />
    </>
  )
};
