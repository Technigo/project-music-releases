import React from 'react';


const Image= (props) => {

return (

 <a
    href={props.AlbumLink}
    aria-label="Go to album"
    target="_blank"
    rel="noopener noreferrer">
    
    <img 
    class="Image" 
    src={props.AlbumImage} 
    alt="Cover of album"/>
</a>

)}
   
export default Image;  



