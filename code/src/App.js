import React from 'react'
import data from './data.json'
import playlistdata from './stretch-goal.json'


import { Albums } from 'components/Albums'
import { Singles } from 'components/Singles'
import { Playlists } from 'components/Playlists'
import { Header } from 'components/Header'

console.log('data', data)
console.log('PLAYLISTS', playlistdata)


export const App = () => {

  return (
    
  <div>
      <Header />

      <h2>New Albums</h2>

      <section>
      {data.albums.items.map((singleAlbum) => {
        if (singleAlbum.album_type === "album")
        return <Albums key={singleAlbum.id} articleDetails={singleAlbum}/>
      })}
      </section>

      <h2>New Singles</h2>

      <section>
      {data.albums.items.map((singleSingle) => {
        if (singleSingle.album_type === "single")
        return <Singles key={singleSingle.id} articleDetails={singleSingle}/>
      })}
     </section>

     <h2>Playlists</h2>

  

        {console.log('testing', playlistdata.playlists.items[0].images[0].url)}
        <section class="section-playlist">
       
          
          {playlistdata.playlists.items.map((singleList) => {
            return <Playlists key={singleList.id} articleDetails={singleList}/>
          })}
         
          
        </section> 


        {/* <section id="section1">
        <a href="#section3" className="arrow__btn">‹</a>
            {playlistdata.playlists.items.slice(0, 5).map((item) => { 
                return <Playlists key={item.id} articleDetails={item} />
            })}
        <a href="#section2" className="arrow__btn">‹</a>    
        </section>

        <section id="section2">
        <a href="#section1" className="arrow__btn">‹</a>
            {playlistdata.playlists.items.slice(5, 10).map((item) => { 
                return <Playlists key={item.id} articleDetails={item} />
            })}
         <a href="#section3" className="arrow__btn">‹</a>
        </section>

        <section id="section3">
        <a href="#section2" className="arrow__btn">‹</a>
            {playlistdata.playlists.items.slice(10, 12).map((item) => { 
                return <Playlists key={item.id} articleDetails={item} />
            })}
         <a href="#section1" className="arrow__btn">‹</a>
        </section> */}



          {/* <a href="#section3" className="arrow__btn">‹</a>
          
          {playlistdata.playlists.items.map((singleList) => {
            return <Playlists key={singleList.id} articleDetails={singleList}/>
          })}
         
          <a href="#section2" className="arrow__btn">›</a>
        </section> */}

        {/* <section id="sections2">
          <a href="#section1" className="arrow__btn">‹</a>
          
          <a href="#section3" className="arrow__btn">›</a>
        </section>
        <section id="sections3">
          <a href="#section2" className="arrow__btn">‹</a>
          {playlistdata.playlists.items.map((singleList) => {
            return <Playlists key={singleList.id} articleDetails={singleList}/>
          })}
          <a href="#section1" className="arrow__btn">›</a>
        </section> */}
     

  </div>

  )
}

