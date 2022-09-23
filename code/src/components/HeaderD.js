import React from 'react';

import SubheaderD from './SubheaderD';

export const HeaderD = (props) => {
  console.log(props.data);
  return (
    <>
      <h2>{props.data.name}</h2>
      <SubheaderD totalTracks={props.data.total_tracks} />
    </>
  );
};

// export default Header;
