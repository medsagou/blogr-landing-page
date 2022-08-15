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

