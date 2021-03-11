import React from 'react';
import './Sidebar.css';
import toggleSidebar from 'actions/toggleSidebar';

const Sidebar = (props) => {
  return (
    <aside id="sidebar" className="sidebar">
      <button
        className="sidebar__button"
        type="button"
        onClick={toggleSidebar}>
        &#9776;
      </button>
      <div className="sidebar__list">
        <h3 className="list__subtitle">PLAYLISTS</h3>
        <h4 className="text-inline text--small">{props.title}</h4>
        <ul>
          {props.playlists.map((item) => (
            <li key={item.id}>
              <a
                className="link link__playlist"
                href={item.external_urls.spotify}
                target="_blank"
                rel="noreferrer">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
export default Sidebar;
