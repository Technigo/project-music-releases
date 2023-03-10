import React from 'react';

import { CoverArt } from 'components/CoverArt';
import { Title } from 'components/Title';
import { Artists } from 'components/Artists';

export const Album = (props) => {
  return (
    <div className="body">
      <CoverArt link={props.item.external_urls.spotify} images={props.item.images} />
      <Title title={props.item.name} />
      <Artists artists={props.item.artists} />
    </div>
  )
}
