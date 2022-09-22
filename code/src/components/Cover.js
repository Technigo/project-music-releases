import React from 'react';

const Cover = (props) => {
    console.log("Hello")
    console.log(props.img)
    return (
       <div>
            <img src={props.img[0].url} className="cardImg"/>
        </div>    
)}

export default Cover;