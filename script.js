/**
 * um array com as skills -> para colocar as opções no formulário
 * no formulario o campo só pode aceitar no máximo 5 skills na seleção
 * um array com as skills selecionadas - no máximo 5
 * pegar a row onde os iskills serão inseridos
 * for cada skill in selecaoskills
 * na row insere o elemento com ${skill}
 * transforma isso em uma função
 * 
 */
const skills = ['python', 'django', 'dart', 'github', 'html', 'css', 'js', 'react-js', 'flutter']
const selecaoSkills = ['github', 'html', 'css', 'js', 'react-js']

function addSkillsIcons(skillsArray){
    const row = document.querySelector('.skillsRow')
    skillsArray.forEach((e)=>{
        let img = document.createElement('img')
        img.classList.add('iSkills')
        img.setAttribute('src', `./assets/${e}-icon.png`)
        row.append(img)
    })
}

addSkillsIcons(selecaoSkills)



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

    isBlue = !isBlue
}