import React from "react"
import data from "./data.json"
import { App } from "./App"


export const Final = () => {
    return (
        <div>
            <h1 className="heading">New albums and singles</h1>
            <div className="flex-container">
                <App />
            </div>
        </div>
    )
}