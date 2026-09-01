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
const accessSection = document.getElementById('access-wrapper');
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

/*
About
*/
const shopViewImages = document.querySelectorAll(".shop-view-img");
const endOpacity = 0.6;
const fadeInKeyFrame = 
{
    opacity: [0, endOpacity],
};
const fadeOutKeyFrame = 
{
    opacity: [endOpacity, 0],
};
const fadeOptions = 
{
    duration: 1000,
    easing: 'ease',
    fill: 'forwards',
}
let currentIndex = 0;

shopViewImages.forEach((shopViewImage, index) => 
{
    shopViewImage.style.opacity = index === 0 ? endOpacity : 0;
});

setInterval(() => 
{
    shopViewImages[currentIndex].animate(fadeOutKeyFrame, fadeOptions);
    currentIndex = currentIndex >= shopViewImages.length - 1 ? 0 : ++currentIndex;
    shopViewImages[currentIndex].animate(fadeInKeyFrame, fadeOptions);
}, 3000);