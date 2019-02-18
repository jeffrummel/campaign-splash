console.log('Let\'s write some javascript!')
const navButton = document.querySelector('button.hed__menu')
navButton.addEventListener('click', e => {
  const nav = document.querySelector('.nav')
  const navVisible = document.querySelector('.nav.visible')
  if (nav != navVisible) {
    nav.classList.add('visible')
  } else {
    nav.classList.remove('visible')
  }
})