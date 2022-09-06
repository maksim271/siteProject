const popup = document.querySelector('.popup')
const popupBody = document.querySelector('.popup-body')
const open = document.querySelector('.reg')
const close = document.querySelector('.close')
const send = document.querySelector('.send')

open.addEventListener('click', () => {
    popup.classList.add('active')
    popupBody.classList.add('active')
})
close.addEventListener('click', () => {
    popup.classList.remove('active')
    popupBody.classList.remove('active')
})
send.addEventListener('click', () => {
    alert('Данные были успешно отправлены')
})