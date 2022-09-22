import React from 'react';


const Artistname = (props) => {
     /* console.log(props.name) */ 
    /* return (
        <div>
        <p>{props.artists[0].name}</p>
        <p>{props.artists.href}</p>
        </div> */
        if (props.artists.length === 1) {
            return (
              <a
                href={props.artists[0].external_urls.spotify}
                key={props.artists[0].id}
                className="artists"
              >
                {props.artists[0].name}
              </a>
            );
          } else {
            return (
              <p key={props.artists[0].id}>
                {props.artists
                  .splice(0, props.artists.length - 2)
                  .map((artist) => (
                    <a
                      href={artist.external_urls.spotify}
                      className="artists"
                      key={artist.id}
                    >
                      {artist.name},{" "}
                    </a>
                  ))}
                <a
                  href={props.artists[0].external_urls.spotify}
                  className="artists"
                >
                  {props.artists[0].name}
                </a>
                <span className="artist-and"> & </span>
                <a
                  href={props.artists[1].external_urls.spotify}
                  className="artists"
                >
                  {props.artists[1].name}
                </a>
              </p>
            );
}
}
export default Artistname;

 