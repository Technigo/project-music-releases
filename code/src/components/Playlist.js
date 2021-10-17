import React from 'react'

export const Playlist = ({ playlists }) => {
  //This function makes it possible to use event listeners in react
  React.useEffect(() => {
    const menuToggle = document.querySelector('.toggle')
    const showcase = document.querySelector('.playlist-menu')

    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active')
      showcase.classList.toggle('active')
    })
  })
  return (
    <div className='playlist-menu'>
      <h2 className='playlist-title'>Top Playlists</h2>
      {playlists.map((playlist) => {
        return (
          <div className='playlist-wrapper'>
            <div className='sidebar-image'>
              <img src={playlist.images[0].url} alt='Playlist cover' />
            </div>

            <div className='sidebar-text'>
              <h2 className='title-name'>
                <a
                  className='title'
                  href={playlist.external_urls.spotify}
                  target='blank'
                  rel='noopener noreferrer'
                >
                  {playlist.name}
                </a>
              </h2>
            </div>
          </div>
        )
      })}
    </div>
  )
}
