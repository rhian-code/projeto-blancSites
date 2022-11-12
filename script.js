$('main h1, main p').fadeOut()
$('main h1, main p').fadeIn(1600)
$('.logo, header ul').fadeOut()
$('.logo, header ul').fadeIn(1600)
let btn = document.querySelector('.btn-menu')
let menu = document.querySelector('#list-menu')
btn.addEventListener('click', () => {
    menu.classList.toggle('active')
})