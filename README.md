# Music Releases
This project is Technigo's Boot Camp (spring '22) project for week 9, done by Dorothea Barre and Kristiina Kolu. This was our first project done with React creating components by using data from Spotify API. The goal was to build a page which shows sections with new albums and single releases, and section with playlists of 2019. We were provided 2 JSON files: data.json (including all the new albums and single releases) and stretch.json (including playlists).

## The problem

This was our first time using react components, so we worked on understanding props and learning how to write markup and javascript using JSX. We created separate components as js files, which were Header.js, Albums.js, Singles.js, Playlists.js and Footer.js. These components had props as values. We then imported these files to App.js file. On the App.js file we used mapping to return wanted data from the APIS. Important thing was to add unique key values when importing data with React. 

Some challenges we faced were to add the commas "," and ampersands "&" between artist names. We solved this by using css pseudo-selectors.

We tried building a "netflix style"-carousel at first, using arrows that switched between sections in which we had divided up our albums into 5-albums-each-sections, but this became increasingly difficult as we then had to slice our array into separate parts, starting from different indexes of the array for every part. Also this didn't work at all for mobile. In the end we went with adding a scroll-horizontally property to our sections and setting the overflow to hidden. We're looking forward to learning how to make a "proper" carousel in future projects!


## View it live

https://music-app-dorothea-kristiina.netlify.app/