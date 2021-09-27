 Frontend Mentor - Fylo landing page with two column layout solution

This is a solution to the [Fylo landing page with two column layout challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-landing-page-with-two-column-layout-5ca5ef041e82137ec91a50f5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

  - [Useful resources](#useful-resources)
- [Author](#author)




## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

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
-Responsive web design



### What I learned

Got to learn about pseudo-elements and how they can beused to style specified parts of an element
To be specific I focused on ::before Pseudo-element and ::after Pseudo-element to be able to add the background images before and
after the content of the element respectively.
To see how you can add code snippets, see below:

```
.section-b-div::before{
    content:" ";
    position: absolute;
    top:-115px;
    left:0px;
    height: 115px;
    width: 100%;
    background-image: url("../images/bg-curve-desktop.svg");
    background-repeat: no-repeat;
    background-size: cover;
}
  

```



### Useful resources
- [W3Schools](https://www.w3schools.com/css/css_pseudo_elements.asp) - This is an amazing resource which helped me  understand pseudo elements and selectors. I'd recommend it to anyone still learning this concept.


## Author


- Frontend Mentor - [Marvin Ngugi](https://www.frontendmentor.io/profile/phoenix-mkay)
- Twitter - [@Marvin](https://www.twitter.com/Marvin00199204)

