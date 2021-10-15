import React from 'react'

const Icons = () => {
  return (
    <>
      <div className="play-container">
        <img src="/icons/play.svg" alt="play" className="icons play" />
      </div>
      <div className="icon-container">
        <img src="/icons/heart.svg" alt="heart" className="icons" />
        <img src="/icons/play.svg" alt="play" className="icons hide" />
        <img src="/icons/dots.svg" alt="dots" className="icons" />
      </div>
    </>
  )
}

export default Icons
