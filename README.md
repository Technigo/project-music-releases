# Project 9 - Build a 'New Releases' music site using React

Project week 9 @ Technigo Bootcamp 2019 was to use React components to build a page which shows new album and single releases.<br>
https://nyblad-music-releases.netlify.com/ <br>

In the `code/src/data.json` an API response from Spotify is included which contains data for 50 recent releases. Our task was to use this, along with `.map()` to mount an 'Album' component for each album. Within those components our app could should have a structure like this:<br>

* `App` component which has the `data`
  * `Album` component which is rendered using `.map()` and which passes the album data into using props.
    * `Artist` component which is rendered using `.map()` using each item in the `artists` array, inside the `Album` component to show the artist name and a link.

## Learning objectives

- How to write React components<br>
- How to use `.map` to iterate over an array of data and mount many components<br>
- How to use React props to feed information to components<br>
- How to structure React projects into small chunks

## Technologies used
HTML5 <br>
CSS3 <br>
React <br>
JSX

<br>
<br>
Sofie Nyblad 2019
