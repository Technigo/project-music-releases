import React from "react";


export const ArtistDetails = (props) => {                //Display of the Artists names, added a link to their artist page
    return (
        <h3>{props.Artist.map((item, index) => {
            if (props.Artist.length - 1 === index)
            {
                return <a className="Artist" key={item.name} href={item.external_urls.spotify} target="_blank">{item.name}</a> //
            }
            else if(props.Artist.length - 2 === index){
                return <><a className="Artist" key={item.name} href={item.external_urls.spotify} target="_blank">{item.name}</a><span className="middleText"> & </span></>
            }
            else {
                return <><a className="Artist" key={item.name} href={item.external_urls.spotify} target="_blank">{item.name}</a><span className="middleText"> , </span></>
            }
        })}</h3>
    )
}
