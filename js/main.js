const menu = document.querySelector('.menu__body')
const burger = document.querySelector('.menu__burger')
const logo = document.querySelector('.header__inner')

const body = document.body

if (menu && burger) {
  burger.addEventListener('click', () => {
    menu.classList.toggle('active')
    burger.classList.toggle('active')
    body.classList.toggle('lock')
  })
}

menu.querySelectorAll('.menu__link').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('active')
    burger.classList.remove('active')
    body.classList.remove('lock')
  })
})

logo.querySelectorAll('.header__logo').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('active')
    burger.classList.remove('active')
    body.classList.remove('lock')
  })
})
