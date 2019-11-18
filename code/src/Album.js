import React from 'react'
import data from './data.json'

console.log(data)
console.log(data.albums.items[1])
const divStyle = {
    color: 'blue',
    backgroundImage: 'url(' + data.albums.items[1].images[0].url + ')',
    backgroundSize: 'cover',
    height: '200px',
    width: '200px'
};

export const Album = () => {
    return (
        <section id="albums">
            <div>
                <div style={divStyle}>

                </div >
                <div>
                    {data.albums.items[1].name}
                </div>
                <div>
                    {data.albums.items[1].artists[0].name}
                </div>
            </div >
        </section>

    )
}

