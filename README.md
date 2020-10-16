# Music Releases
This week's project is to use React components to build a page which shows new album and single releases.

This was a pair-programming project and our first project using react.

# We've learned :books: 
- to build a website by using react components and to connect the different components by using props. 
- We got familiar with package.json and node_modules and learend to use npm commands to install the dependencies needed for the project and to start run the react development server.

# The problem:
At the beginning of the project we worked with three different components - Album, Artist & Header and a ccs-file for each component. At first we intended to generate the html for the artist in the artist component and then to use the map() method in the album compontent to generate the artists for each album. This worked and we managed to print all the required data to the DOM. However, we couldn't find a way to seperate the artist with a ", ". After getting help from stackOverflow we decided to delete the artist component and instead move the content to the album component. After that we were able to apply the css content-property to add the "," between the artists :smiley:

We imported the components to the App component and here we used the map() method again to mount an album component for each album.


# Tools we have used :wrench: :

- HTML
- CSS 
- JavaScript
- React
- Npm install/start


## View it live

Every project should be deployed somewhere. Be sure to include the link to the deployed project so that the viewer can click around and see what it's all about.
