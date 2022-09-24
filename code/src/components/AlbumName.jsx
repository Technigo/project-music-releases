import React from 'react'

export const AlbumName = (props) => {

  return (
      <h2 className='album-name'>
        <span className='underline'>
        {props.item.name} 
        </span>
      </h2>
 )

}