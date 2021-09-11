const floatMenu = document.querySelector('[data-aside]')
const rightMenu = document.querySelector('[data-right-menu]')
const leftMenuBlur = document.querySelector('[data-left-menu]')
const menuLinks = document.querySelector('[data-menu-links]')


const openMenuButton = document.querySelector('[data-open-button]')
const closeMenuButton = document.querySelector('[data-close-button]')

const actualHeight = window.innerHeight;
const elementHeight = document.getElementById('control-height').clientHeight;

const barHeight = elementHeight - actualHeight;

leftMenuBlur.addEventListener('click', () => {
    floatMenu.classList.toggle('hide')
})

openMenuButton.addEventListener('click', () => {
    floatMenu.classList.toggle('hide')
})

closeMenuButton.addEventListener('click', () => {
    floatMenu.classList.toggle('hide')
})

menuLinks.addEventListener('click', () => {
    floatMenu.classList.toggle('hide')
})