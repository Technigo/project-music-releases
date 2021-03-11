import React from 'react'

import { CategoryHeading } from "./CategoryHeading"
import { CategoryContainer } from "./CategoryContainer"

export const Category = (props) => {
    const filteredItems = props.data.filter(item => item.album_type === props.filter)
    return (
        <div className="category">
            <CategoryHeading heading={`New ${props.filter}s`} />
            <CategoryContainer data={filteredItems} />
        </div>
    )
}