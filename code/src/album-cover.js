import React from 'react'
import data from './data.json'

export const Cover = (props) => {
    return (

        <img className="album-image" src={props.item.images[1].url} />
    )


}