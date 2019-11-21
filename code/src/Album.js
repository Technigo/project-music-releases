import React from 'react'
import data from './data.json'

export const Album = (props) => {
return (
    
    <div>
     
    
    
        <div className="album-img">
            <img src={props.images}/>
        </div>
        <div className="album-title">
            {props.name}
        </div> 
        <h1 className="artist-name">
            {props.artists}
        </h1>
        
   
    </div>
     
  
    
)
}


 