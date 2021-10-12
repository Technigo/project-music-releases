import React from 'react';

const Artist= (props) => {
    console.log(props)

    return (
        <h2>{props.name}</h2>
    )
}

export default Artist