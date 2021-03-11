import React from 'react';
import './List.css';
import Album from 'components/Album/Album';

const List = (props) => {
  return (
    <>
      <h1 className="list__title">{props.type} Released 2019</h1>
      <section className="list__wrapper">
        {props.items.map((album) => (
          <Album
            key={album.id}
            name={album.name}
            image={album.images[0].url}
            artists={album.artists}
            releaseDate={album.release_date}
            url={album.external_urls.spotify}
          />
        ))}
      </section>
    </>
  );
};
export default List;