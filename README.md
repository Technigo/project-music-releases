# Music Releases
In this project we started to use React to create a Spotify-esque page with the 50 top artists of 2019.
We were given a strict design to follow, and be responsive showing 4 albums per row on desktop, 2 on tablet and 1 on mobile.

We got the Spotify data from a .json file which we mapped through and used components to display the differet sections. 
Each album has a album cover image, album name and the name of each artist (with a comma or ampersand between depending on number of artists).
When you click on the album title or the play-icon, it links to the album's external url in the data and when you click on an artist it links to the artist's external url.

On hover the albums have a darker overlay and three icons, and the play button scales to 1,5 its original size.

We used https://validator.w3.org/ to validate our project and https://wave.webaim.org/ to test for accessability, and no adjustements neede to be done.  
   
## The problem

If we hade more time we would try to solve the Flexbox issue for the album container where it displays the last two albums on desktop mode centered, and find a way to adjust them to the left. 

## View it live

https://music-releases-project.netlify.app/
