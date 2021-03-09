import React from 'react';
import './AlbumIcons.css';
import { ReactComponent as Dots } from 'assets/icons/dots.svg';
import { ReactComponent as Heart } from 'assets/icons/heart.svg';
import { ReactComponent as Play } from 'assets/icons/play.svg';

const AlbumIcons = () => {
  return (
    <div className="album__icons">
      <Heart className="icon--smaller" />
      <Play className="icon--big" />
      <Dots className="icon--smaller" />
    </div>
  );
};

export default AlbumIcons;
