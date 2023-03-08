import React from "react"

export const Card = ({ props }) => {
    return (
        <div className="album-card">
            <h1>{props.name}</h1>
        </div>
    )
}