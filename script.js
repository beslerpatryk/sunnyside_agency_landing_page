
const menu = document.getElementById('menu')
const icon = document.getElementById('icon')
const arrow = document.getElementById('arrow')
const header = document.getElementById('header')


window.addEventListener('resize', ()=>{

        menu.style.display = 'none'
        arrow.style.display = 'block'
        header.style.display = 'block'
})





icon.addEventListener('click', ()=> {
    if(menu.style.display === 'none'){
        menu.style.display = 'flex'
        arrow.style.display = 'none'
        header.style.display = 'none'
    } else {
        menu.style.display = 'none'
        arrow.style.display = 'block'
        header.style.display = 'block'
    }
    

})

