import React from 'react'

// Här är våran footer del.

const Footer = (props) => {
  return (
    <>
      <h2 className="madeBy">
        Made by :
        <a
          href="https://github.com/JenFi72"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="Jenny"> Jenny </span>
        </a>
        and
        <a
          href="https://github.com/Kyparn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="Simon"> Simon </span>
        </a>
        Students @ spring 2022 Team Fox 🦊
      </h2>
    </>
  )
}
export default Footer
