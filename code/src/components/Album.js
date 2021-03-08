import React from 'react'
import Artist from './Artist'
import AlbumImage from './AlbumImage'


const Album = (props) =>{
    return (
        <ul>hej
            {console.log(props.data.albums.items)}
            {props.data.albums.items.map((item) => {
                return (
                    <li key={item.id}> 
                        <a target="_blank" rel="noopener noreferrer" href={item.external_urls.spotify}>{item.name}</a>
                        <Artist item={item}/>
                        <AlbumImage item={item}/>
                    </li>
                )
              
            })}
        </ul>
    )
}

export default Album