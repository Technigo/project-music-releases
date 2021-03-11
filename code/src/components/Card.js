import React from 'react'
import { CoverImage } from './CoverImage'
import { Info } from './Info'

export const Card = (props) => {
    return (
        <div className="card">
            <CoverImage image={props.image} />
            <Info title={props.title} titleURL={props.titleURL} artist={props.artist} artistURL={props.artistURL} />
        </div>
    )
}