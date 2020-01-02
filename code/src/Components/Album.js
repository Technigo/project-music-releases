import React from 'react'

const Album = (props) => {

  const ArtistList = props.artists.map((artist, index) => (
    <a 
      key={index} 
      href={artist.external_urls.spotify}
      target="_blank" 
      rel="noopener noreferrer"
    >
      <p className="artist">
        <span>{artist.name}</span>
      </p>
    </a>
  ))

  let output = [] 
  ArtistList.forEach((artist, index) => {
    output.push([artist])
    if (index !== ArtistList.length - 1) {
      output.push(', ')
    }
  })

  return (
    <div className="album">
      <div className="image">
        <img src={props.img} alt={props.title}></img>
        <div className="overlay">
          <div className="interact">
            <img src="icons/heart.svg" alt="Like"></img>
          </div>
          <div className="interact play">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <path  d="M50 6.00001c-24.2767 0-44.0000001 19.7233-44.0000001 44.00001 0 24.2767 19.7233001 44 44.0000001 44s44-19.7233 44-44C94 25.72331 74.2767 6.00001 50 6.00001zm0 4c22.1149 0 40 17.8851 40 40.00001 0 22.1149-17.8851 40-40 40s-40.0000001-17.8851-40.0000001-40C9.9999999 27.88511 27.8851 10.00001 50 10.00001zm-15 21v38.00001l34-19-34-19.00001z" overflow="visible" />
            </svg>
          </div>
          <div className="interact">
            <img src="icons/dots.svg" alt="More"></img>
          </div>
        </div>
      </div>
      <a href={props.albumLink} target="_blank" rel="noopener noreferrer"> {/* Album link */}
        <p className="title">{props.title}</p>
      </a>
        <p className="artist"></p>
        <div>
          {output}
        </div>
        
    </div>
  )
}

export default Album