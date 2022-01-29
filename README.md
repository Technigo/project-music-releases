# Music Releases 🎧

This is our very first React project and the goal was to build a music site using JSX and React components. A page that displays new albums and singles releases using data from Spotify .✨🎵

## What have I learned 💡

- We started sketching out how we wanted to structure the page using different components and how to use **props** to pass data into other components.
- We also got comfortable using npm install and npm start commands.
- In the App.js component we performed a **map()** function over an array of the data from Spotify, which generated Album cards with: id, Cover, Name, link, and band name.
- In the Album.js component we used props from the Article.js to render the artist's url and the album title.
- In the Artist.js component we passed props from the Article.js component and performed a **conditional rendering** to display artists with comma and & properly.
- In the Article.js we used props from the App component to generate HTML element that show the albums cover. Inside Article.js we also **mounted** the Artist and Album components.
- To get the artists names we performed another map() because the names was inside an array in the data.

This is the very first encounter with React and it was fun project to get familiar with React, props and general structuring of a page using components.💪

## View it live

https://project-music-albums.netlify.app/ (Built by
Naushin Malik, Linnea Isebrink and Madelene Trang)
