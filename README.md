# Music Releases

This project was part of the TECHNIGO front end boot camp for week 9. It was done as a pair-programming assignment, with us using React for the very first time. 

## The problem

The main task was to create and use React components to fetch data from a Spotify API and present 50 new album and single releases. The page had to include the album cover image, album name and the name of each artist involved with a comma in between. The site had to be responsive and display 4 albums per row in desktop view, 2 albums per row in tablet and 1 full column for mobile. Furthermore the site were to look as closely as possible to a provided Spotify design sketch with the following functionalities: 

-	When you hover over an album it should go darker and show three different icons - a play button, a favourite button and the dots icon. When hovering over the play button, it should grow. Working with these icons also meant we had to style some SVG files in order for them to correspond to the Spotify design. 
-	When hovering on Artist Name or Album Name they should get an underline, and when clicking on them they should link to their respective external URL’s.

Initially we were given some basic file structure, as well as the downloaded response from the API in a JSON file. We started off by creating our most important Album component, importing and exporting data from there into the App.js. Writing the functions and mounting the data was the most complex part of this assignment for us, and without a doubt what we spent most time trying to achieve. For the overall layout structure we used Grid, and applied rem units for responsiveness.  

When we have more time we need to reconstruct the map method in the Artist component, for it to map over the artists extarnal URL´s. Since we haven´t managed to do this yet, we are also left to apply the comma in between each artist when there are more than one contributor. We are also experiencing some problems when deploying our site to Netlify, the cover image disapperars on hover and the icons unfortunately wont show either. 

## View it live

To view the site live, please follow this link: https://cocky-saha-0b7385.netlify.app/
