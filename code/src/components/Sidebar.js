import React from 'react'


const Sidebar = (props)  =>{
    return(
        <ul>
            {console.log(props.data.playlists.items)}
            {props.data.playlists.items.map((item)=>{
                return (
                    <li key={item.id}>
                        <a href={item.external_urls.spotify} target="_blank" rel="noopener noreferrer" className="playlist-names">{item.name}</a>   
                    </li>
                )
            })}
        </ul>
        
    )
}

export default Sidebar