import React from 'react'


const Album = (prop) => {
    
    return (
        <div className="albumCard">
            {/* <div class="imageAndIcon"> */}
                <img className="albumImage" src={prop.image}/>
                <div className="iconsHidden">
                    <a className="heart"></a>
                    <img/>
                    <img/>
                </div>
            {/* </div> */}
            
            <h2 className="albumTitle">{prop.title}</h2>
            <h3 className="artistName">{prop.artist}</h3>
        </div>     
    )
}

export default Album