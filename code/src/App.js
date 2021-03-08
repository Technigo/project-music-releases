import React from 'react'
import data from './data.json'
import { Header } from './components/Header'
import { Images } from './components/Images'

console.log(data.albums.items[0].name)


export const App = () => {
    return ( <
        div >
        <
        Header / >

        < Images />

        <
        /div>
    )
}