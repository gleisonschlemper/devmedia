var navbar = document.querySelector('#navBar')
var manual = document.querySelector('.manual')
window.onscroll = function(){
    if(window.pageYOffset >= manual.offsetTop){
        navbar.classList.add("sticky")
    }
    else{
        navbar.classList.remove("sticky")
    }
    }

var linguagem = document.querySelector('.sobreLinguagem')
var nossaCarreira = document.querySelector('#nossaCarreira')


function carreira(){
    if(linguagem.classList.contains('top') ){
        linguagem.classList.remove('top')
        nossaCarreira.style.cursor = 'pointer'
    }
    else{
        linguagem.classList.add('top')
        nossaCarreira.style.cursor = 'inherit'
    }
}

var navMobile = document.querySelector('.navMobile')
function mobile(){
    navMobile.style.display = 'block'

}

function fecharMobile(){
    navMobile.style.display = 'none'
}
var sobreTecno = document.querySelector('.sobreTecnoMobile')
var setaCima = document.querySelector('.setaCima')
var setaBaixo = document.querySelector('.setaBaixo')
function tecnologia(){

    if(setaBaixo.style.display == 'flex'){
        setaCima.style.display = 'flex'
        setaBaixo.style.display = 'none'
        sobreTecno.classList.add('animacao')
    }
    else{
        setaCima.style.display = 'none'
       setaBaixo.style.display = 'flex'
       sobreTecno.classList.remove('animacao')
    }
}

var cadastroUsuario = document.querySelector('.cadastroUsuario')
function mostrarUsuario(){
    if(cadastroUsuario.style.display == 'none'){
        cadastroUsuario.style.display = 'flex' 
    }
    else{
        cadastroUsuario.style.display = 'none' 
    }
   
}