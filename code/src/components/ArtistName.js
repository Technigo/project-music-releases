import React from 'react';

const ArtistName = (props) => {   
    return (
      <>
        <div className='artist-container'>
          <a        
          href={props.artistLink}>
            <div>
              <h3 className='artist-name'>
              {props.artistName}      
              </h3>
            </div>
          </a>
        </div>
      </>
    );
  }
  
  // const ArtistName = (props) => {   
  //   return (      
  //     <div> 
  //       {props.artistName.map(artist => {
  //         return (
  //         <a className='grey-underline' 
  //           key={artist.id}
  //           href = {artist.external_urls.spotify}>
  //           {artist.name} 
            
  //         </a>)
  //       })};    
  //       </div> 
  //       )
  //       }
      
         
export default ArtistName



  