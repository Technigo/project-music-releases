import React from 'react'

import Artist from './Artist'




const Album = (prop) => {
    
    return (
        <div className="albumCard">
               <div className="icons hidden" id="hidden">
                    <img className="icon-heart hidden" src="/icons/heart.svg" alt="favorite"/>
                    <img className="icon-play" src="/icons/play.svg" alt="play"/>
                    <img className="icon-dots" src="/icons/dots.svg" alt="more options"/>
                </div>
            <img className="albumImage" id="albumImage" src={prop.image}/> 

            <a href={prop.href} target="_blank">
                <h2 className="albumTitle">{prop.title}</h2>
            </a>  
            <a className="artistName">{prop.artist}</a> 



            
            
             
            
        </div>     
    )
}

export default Album