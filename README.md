# Frontend Mentor - Blogr landing page solution

This is a solution to the [Blogr landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP).

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


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./design/active-states.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles
- [Modern css reset](https://piccalil.li/blog/a-modern-css-reset/) - piccalil


### What I learned



```html
<div id="menu-container" class="menu-container" state="not-active">
                    <ul class="menu">
                        <li class="menu-elem">
                            <div class="title-drop-down-container" area="not-expended">
                                <p>Product</p>
                                <svg class="mobile" xmlns="http://www.w3.org/2000/svg" width="10" height="7" stroke="#FF7B86"><path fill="none"  stroke-width="2" d="M1 1l4 4 4-4"/></svg>
                                <svg class="desktop" xmlns="http://www.w3.org/2000/svg" width="10" height="7"><path fill="none" stroke="#FFF" stroke-width="2" opacity=".75" d="M1 1l4 4 4-4"/></svg>
                            </div>
                            <ul class="drop-down-menu dropOne">
                                <li class="drop-down-menu-elem"><a href="#">Overview</a></li>
                                <li class="drop-down-menu-elem"><a href="#">Pricing</a></li>
                                <li class="drop-down-menu-elem"><a href="#">Marketplace</a></li>
                                <li class="drop-down-menu-elem"><a href="#">Features</a></li>
                                <li class="drop-down-menu-elem"><a href="#">Integrations</a></li>
                            </ul>
                        </li>
                        <li class="menu-elem">
                            <div class="title-drop-down-container" area="not-expended">
                                <p>Company</p>
                                <svg class="mobile" xmlns="http://www.w3.org/2000/svg" width="10" height="7" stroke="#FF7B86"><path fill="none"  stroke-width="2" d="M1 1l4 4 4-4"/></svg>
                                <svg class="desktop" xmlns="http://www.w3.org/2000/svg" width="10" height="7"><path fill="none" stroke="#FFF" stroke-width="2" opacity=".75" d="M1 1l4 4 4-4"/></svg>
                            </div>
                            <ul class="drop-down-menu dropTwo">
                                <li class="drop-down-menu-elem"><a href="#">About</a></li>
                                <li class="drop-down-menu-elem"><a href="#">Team</a></li>
                                <li class="drop-down-menu-elem"><a href="#">Blog</a></li>
                                <li class="drop-down-menu-elem"><a href="#">Careers</a></li>
                            </ul>
                        </li>
                        <li class="menu-elem">
                            <div class="title-drop-down-container" area="not-expended">
                                <p>Connect</p>
                                <svg class="mobile" xmlns="http://www.w3.org/2000/svg" width="10" height="7" stroke="#FF7B86"><path fill="none"  stroke-width="2" d="M1 1l4 4 4-4"/></svg>
                                <svg class="desktop" xmlns="http://www.w3.org/2000/svg" width="10" height="7"><path fill="none" stroke="#FFF" stroke-width="2" opacity=".75" d="M1 1l4 4 4-4"/></svg>
                            </div>
                            <ul class="drop-down-menu dropthree">
                                <li class="drop-down-menu-elem"><a href="#">Contact</a></li>
                                <li class="drop-down-menu-elem"><a href="#">Newsletter</a></li>
                                <li class="drop-down-menu-elem"><a href="#">LinkedIn</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div class="login-sign-up-mobile mobile">
                        <a class="login-mobile" href="#">Login</a>
                        <a class="sign-up-mobile" href="#">Sign Up</a>
                    </div>
                </div>
```
```css
    #close{
        display: none;
    }
```
```js
const menuContainer = document.getElementById('menu-container');
const hamburgerButton = document.getElementById('hamburger');
const closeButton = document.getElementById('close');
const menuButton = document.getElementById('menu-button');

const subMenuContainer = document.getElementsByClassName('title-drop-down-container');

for (let i = 0; i < subMenuContainer.length ; i++){
    subMenuContainer[i].addEventListener('click', function(){
        const subMenuState = subMenuContainer[i].getAttribute('area');
        if (subMenuState == 'expended'){
            subMenuContainer[i].setAttribute('area','not-expended')
        }else{
            subMenuContainer[i].setAttribute('area','expended')
        }
    })
}

menuButton.addEventListener('click', function(){
    const menuState = menuContainer.getAttribute('state');
    if (menuState == 'not-active'){
        hamburgerButton.style.display = 'none';
        closeButton.style.display = 'block';
        menuContainer.setAttribute('state','active');
    }else{
        hamburgerButton.style.display = 'block';
        closeButton.style.display = 'none';
        menuContainer.setAttribute('state','not-active');
    }
})


```


### Continued development

drop down menus becomes an easy thing to do after my 4th or 5th project that contain a drop down menu.


### Useful resources

- [W3schools](https://www.w3schools.com/) - This helped me for javaScript eventListener. I really liked this pattern and will use it going forward.
- [stackoverflow](https://stackoverflow.com/) - this website help me on the javascript when i get stock.
## Author

- Website - [Mohamed Sagou](https://github.com/medsagou)
- Frontend Mentor - [@medsagou](https://www.frontendmentor.io/profile/medsagou)
- Twitter - [@sagoumohamed](https://www.twitter.com/sagoumohamed)

## Acknowledgments

nothing for this project.