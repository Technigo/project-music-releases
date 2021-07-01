# Music Releases
This is a pair-programming project, that was made during the Technigo Bootcamp. The assignment was to build a music releases site, using React components. The data shows new album and single releases from downloaded JSON file from Spotify's API.

## The problem
We started off with a close look at the provided design to determine which components we would need and how to set them up. After that we constructed these basic components and their relations to each other. 

We had some small issues with fetching the data correctly. To solve this we needed to redo some of the code. This also made the code more easy so follow because we divided it into more components.
We used the map-method to display an Album-component for each album and an Artist component for each artist. 

We also did Javascript logic so that if there are only two artists you show a "&" between them, and if there are more than two artists, you show "," between all artists except the last two which should have "&".
When we had the functionality in place, we implemented all of the design.

For the next React project we will plan the structure even better of the components before starting to code. 
 
If we had more time we would display more information from the data file, mostly for practice. It would also be fun to try to sort the albums/singles and add filtering possibilities.

## View it live
Link to our project on Netlify: 
https://quizzical-noether-570a46.netlify.app/
