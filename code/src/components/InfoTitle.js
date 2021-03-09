import React from 'react'

export const InfoTitle = (props) => {
    return (
        <a className="infoTitle" href={props.titleURL} target="_blank">{props.title}</a>
    )
}