const floatMenuClickListener = {

    hideFloatMenu() {

        const floatMenu = document.querySelector('[data-aside-headerMenu]')

        floatMenu.classList.toggle('hide')

    },

    toggleMenuView() {

        const leftMenuBlur = document.querySelector('[data-left-menu]')
        const menuLinks = document.querySelector('[data-menu-links]')

        const openMenuButton = document.querySelector('[data-open-button]')
        const closeMenuButton = document.querySelector('[data-close-button]')

        openMenuButton.addEventListener('click', this.hideFloatMenu)
        closeMenuButton.addEventListener('click', this.hideFloatMenu)
        leftMenuBlur.addEventListener('click', this.hideFloatMenu)
        menuLinks.addEventListener('click', this.hideFloatMenu)

    }

}

const projectClickListener = {

    cel() {

        const servicesMenu = document.querySelector('[data-aside-ServicesMenu]')
        const descButtons = document.querySelectorAll('[data-desc-button]')
        const closeButton = document.querySelector('[data-close-servicesMenuButton]')

        for (let x = 0; x < descButtons.length; x++) {
            descButtons[x].addEventListener('click', () => {
                servicesMenu.classList.toggle('hide')
                appendElements.cel(descButtons[x].parentElement)
            })
        }

        closeButton.addEventListener('click', () => {
            servicesMenu.classList.toggle('hide')
            removeAppendElements.cel()
        })
    },

    desktop() {

        const servicesImgMenu = document.querySelector('[data-aside-projectsMenu]')
        const servicesImg = document.querySelectorAll('[data-servicesImg]')
        const closeButtonImg = document.querySelector('[data-closen]')

        for (let x = 0; x < servicesImg.length; x++) {
            servicesImg[x].addEventListener('click', () => {
                servicesImgMenu.classList.toggle('hide')
                appendElements.desktop(servicesImg[x].parentElement)
            })
        }

        closeButtonImg.addEventListener('click', () => {
            servicesImgMenu.classList.toggle('hide')
            removeAppendElements.desktop()
        })
    }

}

const appendElements = {

    cel(element) {

        const container = document.querySelector('[data-container]')

        const elementClone = element.cloneNode(true)

        elementClone.classList.add('projetos-menu-group')
        elementClone.removeChild(elementClone.lastElementChild)
        elementClone.lastElementChild.style.display = 'block'
        elementClone.style.borderRadius = '0 0 8px 8px'

        container.appendChild(elementClone)
    },

    desktop(element) {

        const container = document.querySelector('[data-container-desktop]')

        const elementClone = element.cloneNode(true)

        elementClone.classList.add('projetos-menu-group')
        elementClone.removeChild(elementClone.lastElementChild)
        elementClone.lastElementChild.style.display = 'block'
        elementClone.style.borderRadius = '0 0 8px 8px'

        container.appendChild(elementClone)
    }

}

const removeAppendElements = {

    cel() {

        const container = document.querySelector('[data-container]')

        container.removeChild(container.lastElementChild)

    },

    desktop() {
        const container = document.querySelector('[data-container-desktop]')

        container.removeChild(container.lastElementChild)
    }

}

projectClickListener.desktop()
projectClickListener.cel()
floatMenuClickListener.toggleMenuView()
