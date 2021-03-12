import React from 'react'

export const InfoTitle = (props) => {
    return (
        <a className="info-title" href={props.titleURL} target="_blank" rel="noopener noreferrer">{props.title}</a>
    )
}