import React from 'react'
//import data from '../data.json'

const Filter = ({albumChangeType})=> {

  return(
    <button onClick= { () => albumChangeType()}> Filter</button>
  )
}


/* const Filter = (albumFilter) => {
  console.log(albumFilter)
    return (

    const filterBtn = (albumType) => {
        if (albumType === albumFilter.single) {
          return albumFilter.single
        } else {
         
         }
         console.log(filterBtn)
        }
        
        filterBtn()
    ) 

}*/

export default Filter