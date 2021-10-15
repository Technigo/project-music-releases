import React from 'react'

const Icons = (props) => {
  return (
    <>
      {/* <div className="play-container">
        <img src="/icons/play.svg" alt="play" className="icons play" />
      </div> */}
      <div className="icon-container">
        <img src="/icons/heart.svg" alt="heart" className="heart icons" />

        <a href={props.titleUrl} target="_blank" rel="noopener noreferrer">
          <img src="/icons/play.svg" alt="play" className="play icons" />
        </a>
        <img src="/icons/dots.svg" alt="dots" className="dots icons" />
      </div>
    </>
  )
}

export default Icons
