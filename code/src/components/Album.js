import React from 'react'
import Artist from './Artist'
import AlbumImage from './AlbumImage'


const Album = (props) =>{
    return (
        <div className="">
            <ul className="album-list">
                {props.data.albums.items.map((item) => {
                    return (
                        <li key={item.id}> 
                            <AlbumImage item={item}/>
                            <a target="_blank" rel="noopener noreferrer" href={item.external_urls.spotify}> <h2 className="album-name">{item.name}</h2></a>
                            <Artist item={item}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}



export default Album