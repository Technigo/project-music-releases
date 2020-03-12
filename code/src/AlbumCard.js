import React from 'react'
import 'albumcard.css'
import data from './data.json'


export const AlbumCard = ({ appletitle, orangeartists }) => {
  // console.log('data in the button', props)
  // const title = props.title
  // const artists = props.artists
  // const images = props.images
  // const { images, title, artists } = props
  console.log(data.albums.items[1].artists[0].external_urls.spotify)
  return (


    < article >


      <h1 className='SongTitle'>{appletitle}</h1 >



      {
        orangeartists.map(item => {
          return <a href={item.external_urls.spotify}>
            <p key={item.name} className='artist-name'>{item.name}</p>
          </a>
        })
      }
    </article >

  )
}