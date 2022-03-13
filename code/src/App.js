import React from 'react'

import data from './data.json'
import Albumcover from './components/Albumcover.js'
import Albuminfo from './components/Albuminfo.js'
import Artistinfo from './components/Artistinfo.js'
import Header from './components/Header.js'

console.log(data)

export const App = () => {
  const itemArray = data.albums.items
  
  return (
    <section>
      <Header />
      <article className="grid-container">
      {itemArray.map(item => {
        //console.log(item.artists.length)
        let artistNames = item.artists;
        console.log(artistNames);
        // artistNames.map((artist) => {
        //   console.log(artist)
        //   return (
        //     <Albuminfo 
        //     key={item.artists[0].id}
        //     album={item.name}
        //     artist={artist.name}
        //     url={item.external_urls.spotify}
        //     artistUrl={artist.external_urls.spotify}
        //   />
        //   )
        // })

        // if (item.artists.length >= 2) {
          
        //   let artistName = '';
        //   let artistLink = '';
        //   for (let i = 0; i < item.artists.length; i++) {
        //     artistLink = item.artists[i].external_urls.spotify;
        //     console.log(artistLink)
        //     if (i === item.artists.length - 1) {
        //       artistName += item.artists[i].name;                        
        //     } else if (i === item.artists.length - 2 && i !== 0) {
        //       artistName += item.artists[i].name + ' & ';              
        //     } else {
        //       artistName += item.artists[i].name + ', ';                   
        //     }            
        //   }
        //   return (
        //     <div className="grid-container-div">
        //       <Albumcover 
        //         key={item.id}
        //         src={item.images[1].url} 
        //         url={item.external_urls.spotify}
        //       />
        //       <Albuminfo 
        //         key={item.artists[0].id}
        //         album={item.name}
        //         artist={artistName}
        //         url={item.external_urls.spotify}
        //         artistUrl={artistLink}
        //       />
        //     </div>            
        //   )
        // }  
      
        return (
          <div className="grid-container-div">
            <Albumcover 
              key={item.id}
              src={item.images[1].url} 
              url={item.external_urls.spotify}
            />
            <Albuminfo
            album={item.name}
            url={item.external_urls.spotify}
            />

          {artistNames.map((artist) => {
            //console.log(artist)
            console.log(artistNames.length)
            if (artistNames.length === 1) {
            return (
              <Artistinfo 
                key={item.artists[0].id}            
                artist={artist.name + ' '}            
                artistUrl={artist.external_urls.spotify}
              />
            )
            //make it else if currentIndex = artistNames[artistNames.length-1]
            //probably that if dont work in map, it will return what it returns, no matter condition?
            } else if (artistNames.length >= 2) {      
                if(artistNames[artistNames.length-1]) {
                  console.log(artistNames[artistNames.length-1])
                  return (
                    <Artistinfo 
                      key={item.artists[0].id}            
                      artist={artist.name + ', '}            
                      artistUrl={artist.external_urls.spotify}
                    />  
                  )
                }
              //  else {
              //     return (
              //       <Artistinfo 
              //         key={item.artists[0].id}            
              //         artist={artist.name + ', '}            
              //         artistUrl={artist.external_urls.spotify}
              //       />
              //     )
              //   }
              
              }
            
            })}
          </div>
        )
      })}

      </article>
  </section>
  )
}


