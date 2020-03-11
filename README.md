# Music Releases

Our task this week was to build a music streaming site in React by mapping and displaying information from a Spotify API.

## The problem

Describe how you approached to problem, and what tools and techniques you used to solve it. How did you plan? What technologies did you use? If you had more time, what would be next?

We broke down each item of data that we needed to return and created a separate component for each. We then mounted these to a single 'album-card' component which put them through a map() function to display them for each album in the API array. Because certain songs had multiple artists, the 'artist-name' component was itself map.

To complete the stretch goal, we created a single component called 'playlist' with a map function which returned each item
of information we wanted, rather than breaking each down into its own sub-component, as this would have led to many separate files.

 We then mounted both the playlists and album-card components inside another component which separated them into two different sections to make styling them easier. 

 If we were to do this project again, we would use more 'deconstructors' to avoid repeating many 'prop.item...etc's, making the code more simple to follow. It was also not necessary to break the album-card into many separate sub-components, but we thought it was a good idea to do so for the sake of practice. 

## View it live

https://frosty-neumann-f2d0d2.netlify.com