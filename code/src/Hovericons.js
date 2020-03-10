import React from 'react'

// These are the 3 hover icons

export const HoverIcons = () => {
  return (
    <div className="Icon-wrapper">
      <img className="Hover-image dots" src="icons/dots.svg" alt="Icon with three dots"></img>
      <img className="Hover-image play" src="icons/play.svg" alt="Icon for play button"></img>
      <img className="Hover-image heart" src="icons/heart.svg" alt="Icon that looks like a heart"></img>
    </div>
  )
}