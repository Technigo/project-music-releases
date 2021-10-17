import React from "react";

const Footer = () => {
  console.log("This is the footer");
  return (
    <footer className="footer">
      <hr className="footer-hr"></hr>
      <div className="footer-content">
        <h4>Created by</h4>
        <a className="aleksa" href="https://github.com/A1eksa">
          <img
            src="./icons/GitHub-Icon-White-Logo.wine.svg"
            className="github-logo"
            alt="githublogotype"
          ></img>
          <p>Aleksa</p>
        </a>
        <a className="jes" href="https://github.com/hemmahosjessi">
          <img
            src="./icons/GitHub-Icon-White-Logo.wine.svg"
            className="github-logo"
            alt="githublogotype"
          ></img>
          <p>Jessi</p>
        </a>
        <div className="team-fox">
          <h4>
            Team Fox <span>🦊</span> Technigo
          </h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
