import React from 'react';

export const SongTitle = (props) => {
    console.log(props)
    return (
        <div>{props.Artist}</div> // Displaying the artist below
    )
}