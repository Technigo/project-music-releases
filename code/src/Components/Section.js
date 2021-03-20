import React from 'react';

import Album from './Album.js';

const Section = (props) => {
    return (
        <section className="section">
            <h1 className="section-heading">{props.title}</h1>
            <div className="album-container">
            {props.array.map((album) =>{
                return <Album key={album.id} album_data={album}/>
            })}
            </div>
        </section>
    )
}
export default Section;