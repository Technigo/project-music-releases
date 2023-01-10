import React from "react"
import { AllIcons } from "./AllIcons"





export const Cover = (props) => {
    return (
        <>
            <img src={props.image}></img>
            <div className="iconsContainer">
                <AllIcons />
            </div>
        </>

    )


}


