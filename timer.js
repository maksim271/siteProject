const days = document.querySelector('.days')
const hours = document.querySelector('.hours')
const min = document.querySelector('.min')
const sec = document.querySelector('.sec')
const data = new Date('Jan 1 2023 00:00:00')


function timer () {
    let now = new Date()
    let gap = data - now
    const day1 = Math.floor(gap/ 1000/ 60/ 60/ 24)
    const hours1 = Math.floor(gap/ 1000/ 60/ 60) % 24
    const min1 = Math.floor(gap/ 1000/ 60) % 60
    const sec1 = Math.floor(gap/ 1000) % 60

    days.innerHTML = day1
    hours.innerHTML = hours1
    min.innerHTML = min1
    sec.innerHTML = sec1
}
timer()
setInterval(timer, '1000')