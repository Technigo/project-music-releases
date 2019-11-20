# Build a 'New Releases' music site using React

This week's project is to use React components to build a page which shows new album and single releases.

Since the focus of this assignment is to practice with React, we've downloaded a response from the Spotify API which you can use, rather than calling the API yourself.

You should build something which looks like this:

![Main design](https://i.imgur.com/CcZyMdDz.png)

When hovering over album covers or artist names, you should implement the following hover styles:

![Hover styles](https://i.imgur.com/vKiV2XU.png)

## What you will learn 🧠

- How to write React components
- How to use `.map` to iterate over an array of data and mount many components
- How to use React props to feed information to components
- How to structure React projects into small chunks

## How to get started 💪🏼

1. Fork this repo
2. Clone this repo into your projects folder on your computer
3. Open up VS Code
4. In the terminal, run `cd code` to change into the code folder
5. Install the dependencies needed for react by running `npm install`
6. Run the react development server by running `npm start`

## How to use the Spotify data & construct your components 🤓

In the `code/src/data.json`, we've included an API response from Spotify which contains data for 50 recent releases. You can `import` this JSON file into a components using `import data from './data.json'` (which we've already done for you in the App component).

The result of importing the json is a variable called `data` which includes the full JSON response. Your task is to use this, along with `.map()` to mount an 'Album' component for each album. Within those components, you could then break things up further. For example, your app could have a structure like this:

- `App` component which has the `data`
  - `Album` component which is rendered using `.map()` and which you pass the album data into using props.
    - `Artist` component which is rendered using `.map()` using each item in the `artists` array, inside the `Album` component to show the artist name and a link.

This is just a suggestion - how you decide to structure your components is completely up to you.

## Design

You should follow the design screenshots as closely as possible. We've provided icons for the play, heart and more info icons when hovering on an album. Use the following for fonts;

- Album title - 14px Helvetica #ffffff
- Artist name - 14px Helvetica #a0a0a0

## Requirements 🧪

- _Your page should look as close as possible to the design provided_.
- You should display the following for each album; album cover image, album name, the name of each artist involved.
- When you hover over an album you should show a play button
- When you hover over the play button, it should grow (see the design sketches)
- When you click on the album, it should link to the album's external url in the data
- When you click on an artist, it should link to the artist's external url in the data
- Your page should be response, showing 4 albums per row on desktop, 2 per row on tablet, and 1 per row on mobile.
- Code follows Technigo’s code guidelines.
- Contribute by helping others with this project on Stack Overflow.
- If selected; demo your solution for your team.

## How to hand in the code 🎯

- When you’re finished with the project, push your code to GitHub with these commands:

  ```
  git add .
  git commit -m "your commit message"
  git push origin master
  ```

- Navigate to your repo and create a Pull Request into the Technigo repo (Add a link to your deployed project.)
- Wait for the code review from your teachers

## How to get help 🆘

Ask for help and share your knowledge about this project with the 'project-music-page' tag on [Stack Overflow](https://stackoverflow.com/c/technigo/questions). Talk to your team on Slack and help each other out. Do some research about your problem, you are surely not the first one with this problem, Google is your friend 🙂. And you can of course also book a tech call.

## Stretch Goals 🏃‍♂

Make sure you've commited and pushed a version of your project before starting with the stretch goals.

**_Playlists Sidebar_**

We've provided another API response which includes a list of popular playlists. Use this, along with some new components to render a list of playlists in a sidebar.

#### 🚨 Don't forget to add, commit and push the changes to GitHub when you're done. 🏁
