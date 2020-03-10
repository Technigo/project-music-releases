import React from 'react'

export const AlbumCard = ({ appletitle, orangeartists }) => {
  // console.log('data in the button', props)
  // const title = props.title
  // const artists = props.artists
  // const images = props.images
  // const { images, title, artists } = props

  return (

    < article >
      <h1>{appletitle}</h1 >
      {
        orangeartists.map(item => {
          return <p key={item.name}>{item.name}</p>
        })
      }
    </article >

  )
}