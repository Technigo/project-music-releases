import React from 'react';

// eslint-disable-next-line react/function-component-definition
function Icons({ link }) {
  // eslint-disable-next-line jsx-quotes
  // 'jsx-closing-bracket-location': [1, 'after-props']
  return (
    <div className="icons-container">
      {/* prettier-ignore */}
      <img
        className="icon heart-icon"
        src="../icons/heart.svg"
        alt="heart-icon" />
      <a target="_blank" rel="noopener noreferrer" href={link}>
        {/* prettier-ignore */}
        <img
          className="icon play-icon"
          src="../icons/play.svg"
          alt="play-icon" />
      </a>
      <img className="icon dots-icon" src="../icons/dots.svg" alt="dots-icon" />
    </div>
  );
}

export default Icons;
