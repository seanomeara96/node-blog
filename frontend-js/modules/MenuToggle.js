class MenuToggle {
    constructor(){
        this.btn = document.querySelector('.menu-btn')
        this.modal = document.querySelector('.menu')
        this.nav = document.querySelector('.navigation')
        this.footer = document.querySelector('.menu-footer')
        this.events()
        this.isOpen = false
    }
    events(){
        this.btn.addEventListener('click',()=>{
            this.openTheModal()
        })
    }
    openTheModal(){
        if(this.isOpen == false){
            this.isOpen = true
            this.modal.classList.toggle('menu--is-open')
            setTimeout(this.showContents.bind(this),500)
        }else{
            this.isOpen = false
            this.showContents()
            setTimeout(this.modal.classList.toggle('menu--is-open'),500)
        }
        
    }
    showContents(){
        this.nav.classList.toggle('navigation--is-visible')
        this.footer.classList.toggle('menu-footer--is-visible')
    }
}
export default MenuToggle