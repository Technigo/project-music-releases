import React, { Component } from 'react'
import Headline from '../Shared/Headline/Headline'
import Playlist from './Playlist/Playlist'
import data from '../../stretch-goal.json'

class SideBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playlists: data.playlists.items,
      title: 'Playlists'
    }
  }

  render() {
    const playlistsList = this.state.playlists.map((playlist) => {
      return (
        <Playlist
          key={playlist.id}
          name={playlist.name}
          owner={playlist.owner.display_name} />
      )
    })
    return (
      <aside>
        <Headline title={this.state.title} />
        <ul>
          {playlistsList}
        </ul>
      </aside>
    )
  }
}

export default SideBar