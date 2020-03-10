import React from 'react'


export const Cover = (props) => {
    return (

        <img className="album-image" src={props.item.images[1].url} alt="album-cover" />
    )


}