import React from 'react'


export const Album = (props) => {
  return (
    <article className="article">
        <div className="img-container">
            {/* <img src = {props.img} alt="album picture"/> */}
        </div>
        <p>{props.albumName}</p>
    </article>
  )
}