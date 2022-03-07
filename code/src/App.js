import React from "react";

import data from "./data.json";

//v1 Named import
import { Article } from "components/Article";

export const App = () => {
  return (
    <section>
      <Article title="Just another header" description="A lot of text" />
      <Article title="Header2" description="text2" />
    </section>
  );
};
