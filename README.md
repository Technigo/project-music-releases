# Music Releases

I built this project together with a team member. We did a music releases site using React components which shows new album and single releases.


## The problem

The main task was to build a page using React components which shows new album and single releases from downloaded JSON response from Spotify's API.

The first thing we did was to analyze the given design and think about how to structure the React components. After we had thought out a structure we proceeded to use the JSON response by using the .map() method to mount an 'Album' component for each album and an 'Artist' component for each artist. We also created Javascript logic so that if there are only two artists you show a "&" between them, and if there are more than two artists, you show "," between all artists except the last two which should have "&".

With the React components in place, we proceeded to add general style according to the given design. We made the page responsive using media queries and Flexbox for the album cards. Furthermore, when hovering over an album we added an effect that made the album cover image go darker and display three icons on top of it with less opacity. Also, when hovering over one of these icons it grew and showed full opacity.

If we had more time we would have tried to add a sidebar with playlists for the user to choose from.


## View it live

View the deployed project here: https://dazzling-aryabhata-b33e50.netlify.app/
