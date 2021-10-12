import React from 'react'


export const Album = (props) => {
  return (
    <article className="article">
        <div className="img-container">
            <img src = {props.albumImg} alt="album"/>
        </div>
        <p>{props.albumName}</p>
    </article>
  )
}