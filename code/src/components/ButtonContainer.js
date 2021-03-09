import React from 'react'
import { FavoriteButton } from './FavoriteButton'
import { PlayButton } from './PlayButton'
import { MoreButton } from './MoreButton'


export const ButtonContainer = () => {
    return (
        <div className="buttonContainer">
            <FavoriteButton />
            <PlayButton />
            <MoreButton />
        </div>
    )
}