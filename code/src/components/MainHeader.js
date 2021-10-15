import React from 'react'

const MainHeader = () => {
  return (
    <header className="header">
      <h1 className="main-heading">New Albums and Singles</h1>
      {/* prettier-ignore */}
      <img
        src="/icons/spotify4.svg"
        alt="spotify logo"
        className="header-logo" />
    </header>
  )
}

export default MainHeader
