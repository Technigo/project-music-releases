import React from 'react';


export const Album = (props) => {
    console.log(props.data);
return (
    <>
    <div>
      <a className='white bold'href= {props.data.external_urls.spotify} target="_blank">
        {props.data.name}
      </a>
    </div>
    </>
);
}
