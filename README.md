This is a project made during the Technigo Bootcamp. 

# Music Releases
This project assignment was to use React components to build a page which shows new album and single releases, using a downloaded response from the Spotify API.

## The problem

This was our first project coding with React and we used .map() to iterate data from Spotify API that was already stored in a file . 
We started by doing a component called Album where we used props to pass the correct data from the data.json file.
To be able to .map through all the artists and display all of them (if there were more than one on an album) and have them in seperate links, we also did a Artist component. In the App.js file we looped both the album info and the artist info seperately.
We structured our components by using JSX.
To position the albums and have the site responsive we used flexbox, and also added code that fills up the row evenly with the albums, and if there aren't enough to fill a row they are placed to the left.
The task was also to apply different hovering effects on the links and icons. We struggled to get all the effects to work on the icons, but after getting some help we managed to solve the problem according to the brief.

## View it live

https://project-new-releases.netlify.app/