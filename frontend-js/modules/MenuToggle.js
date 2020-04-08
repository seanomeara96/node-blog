// A "doFirst" method would be a cool idea
// just to avoid all the setTimeout shenanigans
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
        setTimeout(() => this.toggleContents(), 300);
    };
    closeTheMenu () {
        this.toggleContents();
        setTimeout(() => {
            this.modal.classList.remove('menu--is-open');
            this.modal.classList.add('menu--is-closed');
            this.isOpen = false;
        },100);
    };
    toggleContents () {
        this.nav.classList.toggle('navigation--is-visible');
        this.footer.classList.toggle('menu-footer--is-visible');
    };
};
export default MenuToggle;