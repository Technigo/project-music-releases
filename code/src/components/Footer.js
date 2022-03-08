import React from 'react'

// Här är våran footer del.

const Footer = (props) => {
  return (
    <>
      <p className="madeBy">
        Made by :
        <a href="https://github.com/JenFi72" target="_blank">
          <span className="linkGithub"> Jenny </span>
        </a>
        and
        <a href="https://github.com/Kyparn" target="_blank">
          <span className="linkGithub"> Simon </span>
        </a>
        Students @ spring 2022 Team Fox 🦊
      </p>
    </>
  )
}
export default Footer
