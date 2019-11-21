import React, { Component } from 'react'
import Headline from '../Shared/Headline/Headline'
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
        <div>
          {album.name}
        </div>
      )
    })
    return (
      <>
        <Headline title={this.state.title} />
        {newsList}
      </>
    )
  }
}

export default News