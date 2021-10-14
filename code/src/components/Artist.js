import React from 'react';

const Artist= (props) => {
    console.log(props)

    return (
        <h2>{props.album.artists[0].name}</h2>
        //ej länkat ihop detta rätt
        
    )
}

export default Artist