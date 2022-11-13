
let isBlue = true
const skills = ['python', 'django', 'dart', 'github', 'html', 'css', 'js', 'react-js', 'flutter']
const selecaoSkills = ['github', 'html', 'css', 'js', 'react-js', 'django','flutter']

function changeCard(event){
    const card = event.currentTarget;
    const bgColor = isBlue ? 'green' : 'blue'
    card.style.background = `url(./assets/bg-${bgColor}.svg)`

    isBlue = !isBlue
    const row = document.querySelector('.skillsRow')
    row.innerHTML = ''
    changeSkillsIcons(selecaoSkills)

}

function addSkillsIcons(skillsArray){
    const row = document.querySelector('.skillsRow')
    skillsArray.forEach((e)=>{
        let img = document.createElement('img')
        img.classList.add('iSkills')
        img.setAttribute('src', `./assets/${e}-icon.png`)
        row.append(img)
    })
}

function changeSkillsIcons(skillsArray){
    if(skillsArray.length <= 5){
        addSkillsIcons(skillsArray)
    }else if(skillsArray.length > 5){
        const skillsArrayBlue = skillsArray.slice(0,4)
        const skillsArrayGreen = skillsArray.slice(5)
        if(isBlue){
            addSkillsIcons(skillsArrayBlue)
        }
        if(!isBlue){
            addSkillsIcons(skillsArrayGreen)
        }
    }
}

changeSkillsIcons(selecaoSkills)


/**
 * funcao: pega os valores dos inputs do formulario e constroi um objeto
 * colocar essa função no onclick do botão Salvar no formulário
 * atribuir valores aos campos no card de acordo com os itens do objeto criado
 * consertar os bugs 
 */