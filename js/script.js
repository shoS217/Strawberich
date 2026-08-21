/*
Navi
*/
const menuOpen = document.querySelector('.navmenu-open-btn');
const menuPanel = document.querySelector('.navmenu-panel');
const menuClose = document.querySelector('.navmenu-close-btn');
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