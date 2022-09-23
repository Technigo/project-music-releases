import {Icons} from "./Icons.jsx"

export const AlbumCover = props => {
    
    return (
        <div className="album-cover-container">
            <img className="album-cover" src={props.image.url} alt="Album cover"/>
            <Icons />
        </div>
    )        
}