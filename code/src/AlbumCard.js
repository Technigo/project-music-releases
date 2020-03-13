import React from 'react'
import 'albumcard.css'
import data from './data.json'


export const AlbumCard = ({ artisturl, appletitle, orangeartists }) => {
  // console.log('data in the button', props)
  // const title = props.title
  // const artists = props.artists
  // const images = props.images
  // const { images, title, artists } = props
  console.log(data.albums.items[1].artists[0].external_urls.spotify)
  console.log('album-url', data.albums.items[1].external_urls.spotify)
  return (
    <>
      <a href={artisturl}>
        <h1 className='SongTitle'>{appletitle}</h1 >
      </a>

      {
        orangeartists.map(orange => {
          return <a href={orange.external_urls.spotify}>
            <p key={orange.name} className='ArtistName'>{orange.name}</p>
          </a>
        })
      }
    </>
  )
}