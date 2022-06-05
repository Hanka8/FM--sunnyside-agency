# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.


### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Vanilla JS

### What I learned

__scroll effect__

.scroll--effect {
  position: sticky;
  bottom: 0;
}

.fs {
  z-index: 3;
}

.sd {
  z-index: 2;
}

__animated hamburger__

.bar1, .bar2, .bar3 {
width: 35px;
height: 5px;
background-color: white;
margin: 6px 0;
transition: 0.4s;
}

.change .bar1  {
-webkit-transform: rotate(-45deg) translate(-9px, 6px);
transform: rotate(-45deg) translate(-9px, 6px);
}
.change .bar2 {opacity: 0;}

.change .bar3 {
-webkit-transform: rotate(45deg) translate(-8px, -8px);
transform: rotate(45deg) translate(-8px, -8px);
}

__transition when menu is showed__

.mobileMenu--hide {
  position: absolute;
  top: -300px;
}

.mobileMenu {
  display: block;
  right: 0;
  top: calc(74rem/16);
  transition: ease .5s;
}

## Next

• make sticky navbar
• make better scrolling effect

## Author

- Frontend Mentor - [@Hanka8](https://www.frontendmentor.io/profile/Hanka8)
