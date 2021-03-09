import React from 'react'

import { InfoTitle } from "./InfoTitle"
import { InfoArtist } from "./InfoArtist"

export const Info = () => {
    return (
        <div className="info">
            <InfoTitle />
            <InfoArtist />
        </div>
    )
}