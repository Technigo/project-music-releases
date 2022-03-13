# Music Releases
Our assignment was to create components using data in React to build a website that displays the latest music releases from Spotify. We were to follow a given design and make the site responsive accordingly.


## The problem
We had an API-fetch from Spotify to start with, and we began with displaying the image, artist name and album name using that API. We also made the artist name and the album name lead to an external links to their spotify-pages. 

The album and artist information were put into a separat component. We also had the header in a separat component. In our App.js we imported all components to make the website complete.

For styling we used grid to make the website responsive. We followed the given design using CSS and added hover-effects and adding "," and "&" between the artists names. We had issues with the overlay showing when the site was deployed. A classmate gave us the tip to change from opacity to transform:scale() to hide/show the overlay, which worked perfectly.


## View it live

https://modest-torvalds-b6767e.netlify.app/
