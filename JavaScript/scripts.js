const list = window.document.querySelectorAll('.item')
const next = window.document.getElementById('next')
const prev = window.document.getElementById('prev')

const count = list.length
let active = 0

next.onclick = () =>{
    const activeold = document.querySelector('.active')
    activeold.classList.remove('active')

    active = active  >= count -1 ? 0 : active + 1

    list[active].classList.add('active')


}
prev.onclick = () =>{
    const activeold = document.querySelector('.active')
     activeold.classList.remove('active')

     active = active <= 0 ? count -1 : active - 1
     list[active].classList.add('active')

}