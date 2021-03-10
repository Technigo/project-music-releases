import React from 'react'

export const Artists = (props) => {
    return <a className="artist" href={props.url}> {props.name}</a>
}