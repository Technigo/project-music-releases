import React from 'react';
import Release from 'Release';

const ReleasesList = (props) => {
  return (
    <section className="releases-list">

      {props.data.map(release => {
        return (
          <Release
            key={release.id}
            image={release.images}
            album={release.name}
            albumUrl={release.external_urls.spotify}
            artist={release.artists}
          />
        )
      })}
    </section>
  )
};
  

export default ReleasesList;