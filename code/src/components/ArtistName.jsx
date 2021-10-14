import React from 'react'



const ArtistName = (props) => {
    console.log(props.amount)

    if (props.amount === 0) {
        return (<span>{props.name}</span>)
    } else {
        return (<span>{props.name}, </span>)
    } 
}


export default ArtistName;
