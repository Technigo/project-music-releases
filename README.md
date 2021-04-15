# Music Releases

The assignment was to build a music release site using React components with data from the Spotify API

## The problem

We started by making only one component for each album that handled everything, but upon realizing the point of the assignment - to learn how to make many components work together and become modular - we restructured our code into several components. 

We used javaScript return statements to render components written in JSX. We used Props to pass along variables into our components, requiring us to mix JSX and javaScript by means of curlybrackets ({}). In instances where we needed conditionals, we used conditional rendering, meaning that javaScript was used to determine which return statement to use for rendering. To render as many albums as the Spotify data gave, we used the .map() array method to mount a new AlbumWrapper component for each, which in turn mounted components AlbumArt and Artist.

## View it live

Netlify build: xenodochial-bhabha-d66c30.netlify.app
