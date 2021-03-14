import React from 'react'

export const Heading = (props) => {
    return (
        <h1 className={props.className}>{props.title}</h1>
    )
}