import React from 'react'

import { InfoTitle } from "./InfoTitle"
import { InfoArtist } from "./InfoArtist"

export const Info = (props) => {
    return (
        <div className="info">
            <InfoTitle title={props.title} titleURL={props.titleURL} />
            <InfoArtist artist={props.artist} artistURL={props.artistURL} />
        </div>
    )
}