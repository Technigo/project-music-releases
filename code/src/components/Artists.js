import React from 'react'

const Artists=(props) => {
    console.log(props);
const artistsName = props.name.map(item=>item.name);
const artistsLink = props.name.map(item=>item.external_urls);

const nameStyling = () => {
    if (artistsName.length === 2) {
        return artistsName.join(" & ")
    }
    else if(artistsName.length >2) {
        return artistsName.join(" & ").replace("&", ", ")
    }
    else {
      return artistsName
    }
} 

return (<a className='artist-name'href={artistsLink}>{nameStyling()}</a>)

}

export default Artists;
