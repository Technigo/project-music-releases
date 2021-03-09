import React from 'react'
import data from '../data.json'

//console.log(data.albums.items[0].artists[0].external_urls)

const test = data.albums.items[0].artists[0].external_urls
console.log(test)

const Link = ({ linkImage }) => {
  return (
    <div>
      <a href={linkImage[1].external_urls}>
      </a>
    </div>
  )
}

export default Link