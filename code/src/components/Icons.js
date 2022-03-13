import React from 'react'
// here we have the icons that are ontop of the artist card with hover effect
const Icons = (props) => {
  return (
    <div className="icons">
      <img
        className="heart-icon"
        src="/icons/heart.svg"
        alt="images of heart"
      />
      <img className="play-icon" src="/icons/play.svg" alt="images of heart" />
      <img className="dots-icon" src="/icons/dots.svg" alt="images of heart" />
    </div>
  )
}

export default Icons
