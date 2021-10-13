import React from 'react'
import 'components/AlbumName.css'

export const AlbumName = props => {
  return (
    <p key={props.name} className='album-name'>
      {props.name}
    </p>
  ) /* className för namn för style */

  /*external url*/
}
