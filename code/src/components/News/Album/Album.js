import React from 'react'

const Album = (props) => {
  return (
    <article className="album">
      <img src={props.img} alt="album cover" className="album-img" />
      <ul>
        <li><img src="/icons/heart.svg" alt="favorite" /></li>
        <li><img src="/icons/play.svg" alt="play" className="play" /></li>
        <li><img src="/icons/dots.svg" alt="more options" /></li>
      </ul>
      <section>
        <h3>{props.albumName}</h3>
        <p>{props.artistName}</p>
      </section>
    </article>
  )
}

export default Album