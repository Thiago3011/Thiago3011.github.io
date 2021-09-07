const rightMenu = document.querySelector('[data-right-menu]')
const leftMenuBlur = document.querySelector('[data-left-menu]')
const menuLinks = document.querySelector('[data-menu-links]')


const openMenuButton = document.querySelector('[data-open-button]')
const closeMenuButton = document.querySelector('[data-close-button]')

leftMenuBlur.addEventListener('click', () => {
    rightMenu.classList.toggle('hide')
    leftMenuBlur.classList.toggle('hide')
})

openMenuButton.addEventListener('click', () => {
    rightMenu.classList.toggle('hide')
    leftMenuBlur.classList.toggle('hide')
})

closeMenuButton.addEventListener('click', () => {
    rightMenu.classList.toggle('hide')
    leftMenuBlur.classList.toggle('hide')
})

menuLinks.addEventListener('click', () => {
    rightMenu.classList.toggle('hide')
    leftMenuBlur.classList.toggle('hide')
})