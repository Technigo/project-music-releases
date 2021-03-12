# Music Releases

**Mission:** 

*Build a SPA displaying new ablums and singles using React components*

**Requirements:**
- 🔵 COMPLETE (all)
- 🔴 COMPLETE (all)
- ⚫ COMPLETE (all)


***

## Installation

Navigate to the project folder and run the following command

```
$ cd code 
$ npm install
```

Aside from the predetermined packages by **Technigo** this project the following packages:
- [MomentJS](https://momentjs.com/) 

## Workflow

### Getting the hang on React projects and structures
So far during this bootcamp I've grown comfortable using a project template I've come up with myself and iterated on over the weeks. However now we are diving into the waters of Node and React, which does require some thought as to its structure in the project tree.

I began by doing some research into this and found that many developers disagree about what is best practice. The official react page said not to overthink it and spend more than 5 min on it (Which I did not follow 😆!). I eventually decided upon grouping the files by `/actions` and `/components`. This [BLOGPOST](https://www.robinwieruch.de/react-folder-structure) was a great inpiration for this.
<br><br>

### Design -> Components -> Props & Data
My next step was to look at the premade design and tried to split up each UI component. 

I decided to start with these:
- Album
  - AlbumImage
  - Artists
- List

I made very simple files for each component (one `.js` and one `.css` for each). I filled the Javascript files with dummy data and began to style the entire page by working through each component. 

After this was done, all I had to do was use `.map()` and `props` to poopulate the components with proper data. 

At this point I was done with the blue requirements... but for me this was when the fun and challenge started! 🚀 
<br><br>

### Fine tuning with calc()!
The site was good to go! Well, not to my standards. I really wanted explore some new CSS ideas for responsiveness. When the sidebar was added to the site all CSS rules were screwed up. After a few trials and errors I decided on using CSS variables in `:root` and `calc()` to calculate and distribute margins for the main content wrapper and alignment of the sidebar. 

```css
:root {
  /* The sidebar should not be wider than 130px.
    We then need to make sure that we add 5% to this so the margin so there is some space between sidebar and main content
  */
  --leftMargin: calc(5% + 130px); 
  
  /* This makes sure that the sidebar has an approriate width when the screen is small */
  --sidebarSmallWidth: calc(130px / 3);
}
```
We can then start distribute these variables in appropriate places within the CSS. For example:

```css
/* App.css */
.main-wrapper {
  margin: 0 5% 0 var(--leftMargin);
}
@media (max-width: 555px) {
  .main-wrapper {
    margin: 0 5% 0 var(--sidebarSmallWidth);
  }
}
```
<br>

***

## Reflections
This project was not so hard in regards to React. Actually, my biggest struggle with React was to figure out how to do what I wanted without using States. But I managed to do so and I look forward to next week when we finally look more into that.
<br><br>
Issues that came up:
- Once again, biggest struggle was CSS! 😥 I always manage to get where I need to go, but the time it takes is longer than any Javascript stuff. 

> 💡 I actually think though that my CSS skills are getting better, since this week I was faster than last week when it came to solving issues regarding flex-box etc. 

If I were to continue on this project / start over I would:
- I would use STATES!
- I would use HOOKS! (so excited for hooks 😇)

<br>

***

## View it live
https://reacting-to-music.netlify.app
