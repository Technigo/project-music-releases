import React from "react";
import "./Heading.css";
import { PlaylistHeader } from "./PlaylistHeader";

export const Heading = () => {
    return (
        <>
            <h1>New albums & singles</h1>
            <PlaylistHeader />
        </>
    )


}
//maybe change h1 to <header>
//change to export default - dont forget to remove {} in the import.