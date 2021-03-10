import React from 'react';
import './AlbumIcons.css';
import { ReactComponent as Dots } from 'assets/icons/dots.svg';
import { ReactComponent as Heart } from 'assets/icons/heart.svg';
import { ReactComponent as Play } from 'assets/icons/play.svg';

const AlbumIcons = (props) => {
  return (
    <div className="album__icons">
      <Heart className="icon icon--smaller" />
      <a
        className="icon icon--interactable"
        href={props.url}
        target="_blank"
        rel="noreferrer">
        <Play className="icon--big" />
      </a>
      <Dots className="icon icon--smaller" />
    </div>
  );
};

export default AlbumIcons;
