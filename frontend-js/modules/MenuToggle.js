class MenuToggle {
    constructor () {
        this.btn = document.querySelector('.menu-btn');
        this.modal = document.querySelector('.menu');
        this.nav = document.querySelector('.navigation');
        this.footer = document.querySelector('.menu-footer');
        this.events();
        this.isOpen = false;
    }
    events () {
        this.btn.addEventListener('click', () => {
            this.toggleMenu();
        });
    };
    toggleMenu () {
        if (this.isOpen == false) {
            this.openTheMenu();
        } else {
            this.closeTheMenu();
        };
    };
    openTheMenu () {
        this.modal.classList.remove('menu--is-closed');
        this.modal.classList.add('menu--is-open');
        this.isOpen = true;
    };
    closeTheMenu () {
        this.modal.classList.remove('menu--is-open');
        this.modal.classList.add('menu--is-closed');
        this.isOpen = false;
    };
};
export default MenuToggle;