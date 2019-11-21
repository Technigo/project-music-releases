import React, { Component } from 'react'
import Headline from '../Shared/Headline/Headline'
import Album from './Album/Album'
import data from '../../data.json'

class News extends Component {
  constructor() {
    super()
    this.state = {
      news: data.albums.items,
      title: 'New albums & singles'
    }
  }

  render() {
    const newsList = this.state.news.map((album) => {
      return (
        <Album
          key={album.id}
          img={album.images[0].url}
          albumName={album.name}
          artistName={album.artists[0].name} />
      )
    })
    return (
      <main className="news">
        <Headline title={this.state.title} />
        <section className="albums">
          {newsList}
        </section>
      </main>
    )
  }
}

export default News