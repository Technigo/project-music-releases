import React from 'react'

const Footer = () => {
  return (
    <>
      <hr className="horizontal-line" />
      <p className="signature">
        Created by {/* prettier-ignore */}
        <a href="https://github.com/loulunds" target="_blank" rel="noopener noreferrer"><span className="github-link">Lousanne {' '}</span></a>
        and {/* prettier-ignore */}
        <a href="https://github.com/jakobxlindstrom" target="_blank" rel="noopener noreferrer"><span className="github-link">Jakob</span>{' '}</a>
        for Technigo 2021
      </p>
    </>
  )
}

export default Footer
