import React from 'react';
import Artists from 'components/Artists'

 const Album = (prop) => {
    return (<div>
        <img src={prop.image} />
        <Artists name={prop.name}/>
        <Artists name={prop.songtitle}/> 
        </div>)
}

export default Album;


