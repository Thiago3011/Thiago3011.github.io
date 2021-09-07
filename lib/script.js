const rightMenu = document.querySelector('[data-right-menu]')
const openMenuButton = document.querySelector('[data-open-button]')
const closeMenuButton = document.querySelector('[data-close-button]')

openMenuButton.addEventListener('click', () => {
    rightMenu.classList.toggle('hide')
})

closeMenuButton.addEventListener('click', () => {
    rightMenu.classList.toggle('hide')
})