# Frontend Mentor - 3-column preview card component solution

This is a solution to the [3-column preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![](./screenshot.jpg)



### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Sass Variables,Nesting,@mixin


### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.
This project helped me apply some concepts on Sass a CSS pre-processor that helps reduce repetition of CSS thus save on time.
I learn how to declare and use variables in Sass,how to nest CSS selectors the same way as HTML, the @mixin directive lets you create CSS code that is to be reused throughout the website and the  @include directive is created to let you use (include) the mixin.
To see how you can add code snippets, see below:

```
// Variables
$orangeColor:hsl(31, 77%, 52%);
$cyan:hsl(184, 100%, 22%);
$darkCyan:hsl(179, 100%, 13%);
$fontFamilyBig:'Big Shoulders Display', cursive;
$font-family:'Lexend Deca', sans-serif;
$GrayColor:hsl(0, 0%, 95%);

// How to use the @mixin directive 
@mixin  display-flex {
    display: flex;
    align-items: center;
    justify-content: center;
}
body{
    font: {
        family: 'Lexend Deca', sans-serif;
        size:15px;
        weight:400;
    }
    background-color:hsl(0, 0%, 95%) ;
    width: 100%;
    min-height: 100vh;
    /* display flex */
    ** @include display-flex;**
}
```


## Author


- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/phoenix-mkay)
- Twitter - [@yourusername](https://www.twitter.com/Marvin00199204)

