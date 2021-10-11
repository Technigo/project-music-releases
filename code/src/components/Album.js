import React from "react";
import Artists from "./Artists";

const Album = () => {
  return (
    <article className="album-card">
      <img
        src="https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&f"
        alt="#"
      />
      <div className="text-wrapper">
        <Artists />
      </div>
    </article>
  );
};

export default Album;
