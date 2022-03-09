import React from "react"

export const Artist = (props) => {
console.log(props)
    return (
        <a href={props.item.external_urls.spotify}>
           {props.item.name} </a> 
    )
}