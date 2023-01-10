import React from "react"

export const Album = (props) => {
    console.log('album props', props)
    return (
        <>
            <a href={props.url}>{props.name}</a>
            <p>{props.type}</p> 
        </>
    )
}
