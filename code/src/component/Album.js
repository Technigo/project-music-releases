import React from 'react'

const Album = (props) => {

    console.log(props)
    return (
        <section className="music">
            <h3>{props.albumDetails.name}</h3>
            <p>{props.albumDetails.href}</p>
            <img src={props.albumDetails.images[0].url} alt="albumcover"/>
        </section>
        // <div className="artistName"> 
        //     <p>{props.albumDetails.artists.name}</p>
        // </div>
    )
}
export default Album

