import React from 'react'

export const Header = (props) => {
  return (
    <header className="releases-header">
      <h1 className="releases-title">{props.title}</h1>
    </header>
  )
}