import React from 'react'
import { slide as Menu } from 'react-burger-menu';
import data from './stretch-goal.json'

console.log(data)

export default () => {
  return (
    <Menu>
    {data.playlists.items.map((item) => {
      return <a><a className="album-link" href={item.external_urls.spotify} target="_blank" rel="noopener noreferrer">
      {item.name}</a></a>
    })}
    </Menu>
  )
} 