import React from 'react'
// This where we are bulding the mainheader.

const MainHeader = (props) => {
  return (
    <header className="header">
      <h1 className="mainHeading">New Albums & Singles</h1>
      <hr className="horizontalLine" />
      <a
        href="https://www.spotify.com/se/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/icons/spotify.svg"
          alt="spotify logo"
          className="headerLogo"
        />
      </a>
    </header>
  )
}
export default MainHeader
