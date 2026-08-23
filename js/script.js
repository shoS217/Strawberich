/*
Navi
*/
const menuOpen = document.querySelector('.navmenu-open-btn');
const menuPanel = document.querySelector('.navmenu-panel');
const menuClose = document.querySelector('.navmenu-close-btn');
const homeTransitionBtn = document.getElementById('home-transition-btn');
const homeSection = document.getElementById('about-wrapper');
const menuTransitionBtn = document.getElementById('menu-transition-btn');
const menuSection = document.getElementById('menu-wrapper');
const accessTransitionBtn = document.getElementById('access-transition-btn');
const accessSection = document.getElementById('information-wrapper');
const menuOpenKeyframe = 
{
    translate: ['100vw', 0],
};
const menuCloseKeyframe = 
{
    translate: [0, '100vw'],
};
const menuOptions =
{
    duration: 600,
    easing: 'ease',
    fill: 'forwards',
};

menuOpen.addEventListener('click', ()=>
{
    menuPanel.animate(menuOpenKeyframe, menuOptions)
});
menuClose.addEventListener('click', ()=>
{
    menuPanel.animate(menuCloseKeyframe, menuOptions)
});
homeTransitionBtn.addEventListener('click', () =>
{
    menuPanel.animate(menuCloseKeyframe, menuOptions);
    homeSection.scrollIntoView(
    {
        behavior: "smooth",
    });
});
menuTransitionBtn.addEventListener('click', ()=>
{
    menuPanel.animate(menuCloseKeyframe, menuOptions);
    menuSection.scrollIntoView(
    {
        behavior: "smooth",
    });
});
accessTransitionBtn.addEventListener('click', ()=>
{
    menuPanel.animate(menuCloseKeyframe, menuOptions);
    accessSection.scrollIntoView(
    {
        behavior: "smooth",
    });
});