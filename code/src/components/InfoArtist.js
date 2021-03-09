import React from 'react'

export const InfoArtist = (props) => {
    if (props.artist.length === 1) {
        return <a className="infoArtist" href={props.artistURL} target="_blank" >{props.artist[0].name}</a>
    } else if (props.artist.length === 2) {
        return <a className="infoArtist" href={props.artistURL} target="_blank" >{props.artist[0].name} & {props.artist[1].name}</a>
    } else {
        return <a className="infoArtist" href={props.artistURL} target="_blank" >{props.artist[0].name}, {props.artist[1].name} & {props.artist[2].name}</a>
    }
}