let isBlue = true

function changeCard(event){
    const card = event.currentTarget;
    const bgColor = isBlue ? 'green' : 'blue'
    card.style.background = `url(./assets/bg-${bgColor}.svg)`
    
    const skill0 = isBlue ? 'python' : 'html'
    const skill1 = isBlue ? 'django' : 'css'
    const skill2 = isBlue ? 'dart' : 'js'
    const skill3 = isBlue ? 'github' : 'react-js'
    
    const row = document.querySelector('.skillsRow')
    row.children[0].src = `./assets/${skill0}-icon.png`
    row.children[1].src = `./assets/${skill1}-icon.png`
    row.children[2].src = `./assets/${skill2}-icon.png`
    row.children[3].src = `./assets/${skill3}-icon.png`
    
    const web = document.querySelector('.web')
    web.innerHTML = isBlue ? 'back-end' : 'front-end'

    isBlue = !isBlue
}