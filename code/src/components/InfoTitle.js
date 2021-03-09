import React from 'react'

export const InfoTitle = (props) => {
    return (
        <a className="infoTitle" href={props.titleURL}>{props.title}</a>
    )
}