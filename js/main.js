let input = document.querySelector('.main__content__input')

input.oninput = function(){
    this.value = this.value.substr(0,12)
    this.value = this.value.replace(/[!@#$%^&*()]/,'')
}

let btn=document.querySelector('.menu-btn')
let nav =document.querySelector('.header__nav--list')
let picture = document.querySelector('.main__animations')
let body = document.querySelector('body')

btn.addEventListener('click', function(e){
    e.preventDefault;
    if(btn.classList.contains('menu-btn_active')){
        btn.classList.remove('menu-btn_active')
        nav.style.display= 'none'
    }else{
        btn.classList.add('menu-btn_active')
        nav.style.display= 'flex'
    }
})






window.addEventListener('resize',displayWindowSize )
function displayWindowSize() {
                if(document.documentElement.clientWidth > 768){
                    nav.style.display= 'flex'
                    window.removeEventListener('resize',displayWindowSize)
        window.addEventListener('resize', displayBodySize)
                    }}  

window.addEventListener('resize',displayBodySize )
function displayBodySize(){
    if(document.documentElement.clientWidth < 768){
        nav.style.display= 'none'
        btn.classList.remove('menu-btn_active')
        window.removeEventListener('resize',displayBodySize)
        window.addEventListener('resize', displayWindowSize)
}
}
