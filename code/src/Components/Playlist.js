import React from "react"

export const Playlist = (list) => {
    return (
        
            <div className="playlist">
              <a href={list.url}>{list.name}</a>
            </div>
    )
}
