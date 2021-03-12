# Music Releases
This is a music release site built in react.

## The problem

We started with defining the Album component and name props for this function. Then we used array maping to get data from the json file to print out in the App importing the Album component. 
Then we built the Menu component to go in the Album function. This component was used to add hover menu on the albums.
To display the album-items we used CSS-grid to be able to assignn number of columns depending on media query. 
Next step was to map each artist and also build a component for this purpose. To seperate the different artists on each album item with commas and &-signs we implemented CSS nth-child. 

We added a sidebar with a list of playlists by importing data from the playlist.json. This is not displayed in mobile view but only on tablet and desktop. We also seperated album-type singles and albums to two different sections on the website.

As a last addition we imported some extra data from both the json files to get total-tracks and release dates.

Techniques: JS ES6, CSS3, JSX, React, components, json, CSS-grid, flexbox
Tools: VS code, Live share, Stack Overflow, Slack, Google meets

## View it live

musicrelease-site.netlify.app
