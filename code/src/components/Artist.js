import React from 'react';


export const Artist = (props) => {
    console.log(props.data);
return (
    <>
    <div>
      <a href= {props.data.artists[0].external_urls.spotify}>
        {props.data.artists[0].name}
      </a>
      </div>
    </>
);
}
