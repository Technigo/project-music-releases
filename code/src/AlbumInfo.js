import React from 'react';

export const AlbumInfo = props => {
return <> <img src={ props.image }/> <p> { props.name } </p> <p> { props.artist }</p>
</>;
};
