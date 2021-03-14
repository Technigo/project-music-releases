# Music Releases

This week's project was to use React components to build a page which shows new album and single releases.

## The problem

The assignment was to create a list of recent releases based on an API response from Spotify, based on a given design. We started by looking at the design and the json response and made a plan for what components we would need to create, and what they would each need to do.

We had some difficulties with where to put the map method which would iterate through the array of artists, at first we couldn't get it to handle the props the right way... in the end we solved it by putting the map() inside the Artist component, inside of a return statement - and then have another return statement inside the map() body. 

We also had a little issue with the placement of the icons-container which was supposed to be on top of the image, with the help of a combination of position: relative and position: absolute. At first it worked, and then all of a sudden it didn't. After some serious head scratching and rolling back to the earlier code, it suddenly started working.

After getting the icons placed correctly, we felt like being on top of the world and decided to go for the stretch goals - red and black. 
This week has taught us how to plan out the components and what each of them should do and as a nice bonus we got good practise in CSS.

## View it live

https://elegant-hawking-15cb3f.netlify.app/