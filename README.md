# Music Releases 🎧
The focus for this project was to start learning React, using components to build a page showing new albums and single releases from the Spotify API.

## The problem ❓
During the project we've used Developer Tools in Chrome and a lot of console.logs to be able to see and understand how to work with the data. We started by creating an AlbumList component, in which we mounted one Album component and one for the array of artists. Mapping over the data, once for album name and image, and then again over the array of artists to be able to show multiple artists, using props to add all the right data to the component parts.

We added the icons by creating another component with img-tags, using the album's image-wrapper and the hover-effect to change visibility of the icons. We struggled a bit trying to figure out how to add an ampersand between each artist if there are more than one, and a comma if there are more than 2 artists.

In the end we got time to also include a playlist, using the same technique we used on the Album/Artist-components.

If we had more time we would have tried a function to sort he albums from the singles (creating two different sections on the site), and maybe also incorporated some more info from the API to make the site more advanced. We would also modify our components a bit, using props to be able to map through the data within the component.

## View it live 👩‍💻
https://spotify-by-emma-karin.netlify.app/
