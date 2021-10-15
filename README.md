# Music Releases

This was a pair-programming project from the introduction week to React at Technigo. The assignment was to display newly released singles & albums by using components and props and in line with the provided design sketches for layout and hover effects. 

## The problem

I our main file App.js we mounted two different components (one for albums and playlists) which in their turn had several smaller components mounted into them, such as the titles and names of the artists. We used .map() to map over the arrays to display it on the page. To separate the album releases from the singles we created two separate arrays containing only albums or singles to map over. When displaying several artists we added a ”,” and/or an ”&” in between the names with the help of an if/else statement using logical operators. 

## View it live

https://friendly-cray-f55ff2.netlify.app/