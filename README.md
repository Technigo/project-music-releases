This is a pair-programming project made during our ninth week at the Technigo bootcamp. The learning objective was to get started with React, writing JSX and breaking up Javascript code into importable modules.
​
# Music Releases
​
The assignemnt was to build a music release site, similar to Spotify, with pre-fetched data from an API from Spotify. By using React components we should show new albums and single releases on our site, according to a predefined design-layout.
​
## The problem
​
We started by setting the structure for our site so we knew what components to create to begin with. We added a header and a footer component as well as an album and an artist component as a start. Then we succeedingly added more components as needed when we moved along with the requirements. We use .map() function to map through the albums array and the artists array and collect the information needed.
​
Adding icons with hovereffect on the albumimages was a bit tricky since we needed to create several containers to make it work. Therefore it was natural to create a separate component called AlbumImage.js 
​
If one album contained several artists they should be separated by a comma or ampersand which also was a bit tricky. We ended up using a javascript function to help us print the right symbol depending on the number of artists for each album, which we got from the artist array.length.
​
To add a playlist as a sidebar we felt the need for adding Playlist.js and Section.js. We use the .filter() function to separate the elements in the albums array in order to return the singles and the albums separately. Adding more information on our site arised the need for better structure so we used section and aside to get the desired layout.
​
If we had more time we would perhaps add some more information from the API response. We would also try to resolve a problem with the albumlink connected to the hover effect on top of the album image that we came across in iOS on mobile.
​
## View it live
​
https://music-release-project.netlify.app
