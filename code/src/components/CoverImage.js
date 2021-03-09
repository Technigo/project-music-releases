import React from 'react'

import { ButtonContainer } from "./ButtonContainer"

export const CoverImage = (props) => {
    return (
        <div className="coverImageContainer">
            <img className="coverImage" src={props.image} />
            <ButtonContainer />
        </div>
    )
}