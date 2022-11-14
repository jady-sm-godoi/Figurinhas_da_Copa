let skills = []

function createCard(){
    const nome = document.getElementById('nome')
    const username = document.getElementById('username')
    const profissao = document.getElementById('profissao')
    const foto = document.getElementById('formFileSm')

    let profileName = document.getElementById("profileName")
    profileName.innerText = nome.value

    let socialName = document.getElementById("socialname")
    socialName.innerText = '@'+username.value

    let profileJob = document.getElementById("profileJob")
    profileJob.innerText = profissao.value

    let photo = document.querySelector(".perfil")
    photo.src = URL.createObjectURL(foto.files[0])


    //options for skills - constructor
    const htmlOption = document.getElementById('html')
    const cssOption = document.getElementById('css')
    const javascriptOption = document.getElementById('javascript')
    const reactOption = document.getElementById('react')
    const githubOption = document.getElementById('github')
    const dartOption = document.getElementById('dart')
    const flutterOption = document.getElementById('flutter')
    const pythonOption = document.getElementById('python')
    const djangoOption = document.getElementById('django')
    const vueOption = document.getElementById('vue')
    
    const options = [htmlOption, cssOption, javascriptOption, reactOption, githubOption, dartOption, flutterOption, pythonOption, djangoOption, vueOption]
    
    options.forEach(
        (opt) => {
            if(opt.checked){
                skills.push(opt.value)
            }
        }
    )
    
    changeSkillsIcons(skills)
}



let isBlue = true;
function changeCard(event){
    const card = event.currentTarget;
    const bgColor = isBlue ? 'green' : 'blue'
    card.style.background = `url(./assets/bg-${bgColor}.svg)`

    isBlue = !isBlue
    const row = document.querySelector('.skillsRow')
    row.innerHTML = ''
    changeSkillsIcons(skills)

}

function addSkillsIcons(skillsArray){
    const row = document.querySelector('.skillsRow')
    row.innerHTML = ''
    skillsArray.forEach((e)=>{
            let img = document.createElement('img')
            img.classList.add('iSkills')
            img.setAttribute('src', `./assets/${e}-icon.png`)
            row.append(img)
        }
    )
}

function changeSkillsIcons(skillsArray){
    if(skillsArray.length <= 5){
        addSkillsIcons(skillsArray)
    }else if(skillsArray.length > 5){
        const skillsArrayBlue = skillsArray.slice(0,5)
        const skillsArrayGreen = skillsArray.slice(5)
        if(isBlue){
            addSkillsIcons(skillsArrayBlue)
        }
        if(!isBlue){
            addSkillsIcons(skillsArrayGreen)
        }
    }
}

const cardDois = document.getElementById('card2')
const form = document.getElementById('cardform')
form.addEventListener('submit', e => {
    e.preventDefault()
    createCard()
    cardDois.style.display = 'none'
})

