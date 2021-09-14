const floatMenu = document.querySelector('[data-aside-headerMenu]')
const leftMenuBlur = document.querySelector('[data-left-menu]')
const menuLinks = document.querySelector('[data-menu-links]')

const openMenuButton = document.querySelector('[data-open-button]')
const closeMenuButton = document.querySelector('[data-close-button]')

const ServicesMenu = document.querySelector('[data-aside-ServicesMenu]')

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

const appendElements = (element) => {
    const container = document.querySelector('[data-container]')

    const elementClone = element.cloneNode(true)
    elementClone.classList.add('projetos-menu-group')

    container.appendChild(elementClone)
}

const removeAppendElements = () => {
    const container = document.querySelector('[data-container]')

    container.removeChild(container.lastChild)
}

const clickListener = () => {

    const descButtons = document.querySelectorAll('[data-desc-button]')
    const closeButton = document.querySelector('[data-close-servicesMenuButton]')

    for (let x = 0; x < descButtons.length; x++) {
        descButtons[x].addEventListener('click', () => {
            ServicesMenu.classList.toggle('hide')
            appendElements(descButtons[x].parentElement)
        })
    }

    closeButton.addEventListener('click', () => {
        ServicesMenu.classList.toggle('hide')
        removeAppendElements()
    })

}

clickListener()