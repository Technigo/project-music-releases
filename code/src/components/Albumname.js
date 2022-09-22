import React from 'react';

const Albumname = (props) => {
    console.log(props.album)
    return (
        <h2>{props.album}</h2>
)}

export default Albumname;