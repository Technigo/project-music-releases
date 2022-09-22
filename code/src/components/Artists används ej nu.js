import React from 'react';

export const Artists = (props) => {
  console.log(props.items)
  return (
    <>
  <div className="Artists">
    {props.item.artists.map((artist) => {
      return <a 
        key={artist.id}
        href={artist.external_urls.spotify}>
        {artist.name}

        </a>
      
    })}
      
    </div>
    </>
  );
};

console.log(Artists)