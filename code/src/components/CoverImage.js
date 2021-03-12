import React from 'react'

import { ButtonContainer } from "./ButtonContainer"

export const CoverImage = (props) => {
    return (
        <div className="cover-image-container">
            <img className="cover-image" src={props.image} alt="Album cover" />
            <ButtonContainer />
        </div>
    )
}