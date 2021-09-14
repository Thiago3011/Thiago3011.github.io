const hideFloatMenu = () => {

    const floatMenu = document.querySelector('[data-aside-headerMenu]')

    floatMenu.classList.toggle('hide')
}

const floatMenuClickListener = () => {

    const leftMenuBlur = document.querySelector('[data-left-menu]')
    const menuLinks = document.querySelector('[data-menu-links]')

    const openMenuButton = document.querySelector('[data-open-button]')
    const closeMenuButton = document.querySelector('[data-close-button]')
    leftMenuBlur.addEventListener('click', hideFloatMenu)

    openMenuButton.addEventListener('click', hideFloatMenu)

    closeMenuButton.addEventListener('click', hideFloatMenu)

    menuLinks.addEventListener('click', hideFloatMenu)

}

const appendElements = (element) => {

    const container = document.querySelector('[data-container]')

    const elementClone = element.cloneNode(true)

    elementClone.classList.add('projetos-menu-group')
    elementClone.removeChild(elementClone.lastElementChild)
    elementClone.lastElementChild.style.display = 'block'
    container.appendChild(elementClone)
    
}

const removeAppendElements = () => {

    const container = document.querySelector('[data-container]')

    container.removeChild(container.lastElementChild)
}

const projectClickListener = () => {

    const ServicesMenu = document.querySelector('[data-aside-ServicesMenu]')
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



projectClickListener()
floatMenuClickListener()