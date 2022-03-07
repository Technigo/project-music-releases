import React from 'react'

export const Album = (props) => {
    console.log(props)
    
    return (
        <section className="album"> 
            <img src={props.img} alt="album-img"/>
            <h2>{props.title}</h2>
            <p>{props.artist}</p>
        </section>
        )
}