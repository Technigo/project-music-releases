# Music Releases 🎧
The focus for this project was to use React components to build a page which shows new album and single releases from the Spotify API.

## The problem ❓

During the project we've used developer tools in chrome and a lot of console.logs to be able to see and understand how to work with the data. We started with creating an Album component which we passed the album data into using props. We then used .map() to mount the Album component for each album inside the AlbumList component, returning an album-wrapper containing image, song title and artist for each album. 

The Artist component is built in the same way (using props for passing the data into a component, and then mounting this component in the AlbumList component using .map() on our data. In the Artist component we also have som extra functionality for when an album contains more than one artist, adding an Adding ampersand between each artist if there are more than one, and a comma if there are more than 2 artists.

The PlayList and Icons components are also rendered using .map() on a data-variable and then mounted in the AlbumList components.

If we had more time we would have tried a function to sort he albums from the singles and create two different sections on the site, and maybe also incorporated some more info from the API to make the site more advanced. 

## View it live 👩‍💻

https://spotify-by-emma-karin.netlify.app/
