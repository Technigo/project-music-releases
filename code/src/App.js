import React from "react";

import { AlbumWrapper } from "components/AlbumWrapper";
import { Sidebar } from "components/Sidebar";

export const App = () => {
  return (
    <div className="album-wrapper">
      <img
        className="menu"
        src="/icons/dots.svg"
        alt="dot icon"
        onKeyPress={(e) =>
          (e.target.className = e.target.className.includes("open")
            ? "menu"
            : "menu open")
        }
      />
      <div className="container">
        <h1 className="title">New albums</h1>
        <div className="album-grid">
          <AlbumWrapper type={"album"} />
        </div>
        <h1 className="title">New singles</h1>
        <div className="album-grid">
          <AlbumWrapper type={"single"} />
        </div>
      </div>

      <aside className="sidebar">
        <h1 className="title">Playlists</h1>
        <ul>
          <Sidebar />
        </ul>
      </aside>
    </div>
  );
};
