import React from "react"
import { AlbumCover } from "components/AlbumCover"
import { AlbumInfo } from "components/AlbumInfo"
import "./album.css"

export const Album = props => (
  <div className='container'>
    <AlbumCover image={props.album.images[1].url} />
    <AlbumInfo name={props.album.name} artist={props.album.artists[0].name} />
  </div>
)
