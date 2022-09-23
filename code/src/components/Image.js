import React from 'react';

// named export
export const Image = (props) => {
  console.log(props.data);
    return (
      <>
        <div className="project-image">
          <div className="project-image-overlay"></div>
          <img src={props.data.images[1].url} alt={props.data.name}/>
          <div className='buttons'>
            <svg xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24"><g>
              <circle cx="2.5" cy="12.5" r="2.5"/>
              <circle cx="12" cy="12.5" r="2.5"/>
              <circle cx="21.5" cy="12.5" r="2.5"/></g>
            </svg> 
          </div>
        </div>
      </>
  );
}

