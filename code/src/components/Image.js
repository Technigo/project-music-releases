import React from "react"

const Image = ({ coverImage }) => {
  return (
    <div className="album-container">
      <div className="overlay">
        <img className="icons heart" src="./icons/heart.svg" />
        <img className="icons play" src="./icons/play.svg" />
        <img className="icons dots" src="./icons/dots.svg" />
      </div>
      <img src={coverImage} alt="Album cover" />
    </div>
  )
}

export default Image
