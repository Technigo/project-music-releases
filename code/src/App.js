import React from "react"
import data from "./data.json"

import Image from "./components/Image"
import Artists from "./components/Artists"
import Albums from "./components/Albums"

console.log("GENERAL DATA", data)

export const App = () => {
  return (
    <div className="App">
      {data.albums.items.map((item) => {
        return <div key={item.id}>{item.name}</div>
      })}
    </div>
  )
}

{
  /* <Image image="https://picsum.photos/200/300?grayscale" />
<Artists artist="Trap CV" />
<Albums album="juice" />
<Image image="https://picsum.photos/seed/picsum/200/300" />
<Artists artist="Adele" />
<Albums album="25" /> */
}
