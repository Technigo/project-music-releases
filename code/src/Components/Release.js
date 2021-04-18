import React from "react";

const Release = (props) => {
  const releaseName = props.release;
  const releaseUrl = props.releaseUrl;
  
  return (
    <div className="title-container">
      <a className="title" href={releaseUrl}>
        {releaseName}
      </a>
    </div>
  );
};

export default Release;