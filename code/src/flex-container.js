import React from "react"
import { AlbumCard } from "./Album-Card"
import info from "./stretch-goal.json"

export const FlexContainer = () => {
    console.log(info)
    return (


        <article className="flex-container">
            <h1 className="heading">New albums and singles</h1>
            <AlbumCard />
        </article>

    )
}