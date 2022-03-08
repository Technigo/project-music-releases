import React from 'react'

const Album = (props) => {
  return (
    <main className="main">
        <article className="song-card">
            <img src={props.cover}/>
            <section className="song-info">
                <div className="song-name">
                    {props.albumName} 
                </div>
                <div className="song-artist">
                    {props.artistName}
                </div>
            </section>
            {/* {props.albumLink} */}
        </article>
    </main>
  )
}

export default Album