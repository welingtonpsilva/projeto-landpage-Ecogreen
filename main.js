const sobre = document.getElementById('isobre')
const servicos = document.getElementById('iservicos')
const valores = document.getElementById('ivalores')
const contato = document.getElementById('icontato')

const sobret = document.getElementById('isobretext')
const servicost = document.getElementById('iservicostext')
const valorest = document.getElementById('ivalorestext')
const contatot = document.getElementById('icontatotext')

sobre.addEventListener('click' , clicarsobre)
servicos.addEventListener('click' , clicarservicos)
valores.addEventListener('click' , clicarvalores)
contato.addEventListener('click' , clicarcontato)

function clicarsobre(){
    if(sobret.style.display == 'none'){
        sobret.style.display = ('block')
        servicost.style.display = ('none')
        valorest.style.display = ('none')
        contatot.style.display = ('none')
    }
    else{
        sobret.style.display = ('block')
        servicost.style.display = ('none')
        valorest.style.display = ('none')
        contatot.style.display = ('none')
    }

}
function clicarservicos(){
    if(servicost.style.display == 'none'){
        sobret.style.display = ('none')
        servicost.style.display = ('block')
        valorest.style.display = ('none')
        contatot.style.display = ('none')
    }
    else{
        sobret.style.display = ('none')
        servicost.style.display = ('block')
        valorest.style.display = ('none')
        contatot.style.display = ('none')
    }
}
function clicarvalores(){
    if(servicost.style.display == 'none'){
        sobret.style.display = ('none')
        servicost.style.display = ('none')
        valorest.style.display = ('block')
        contatot.style.display = ('none')
    }
    else{
        sobret.style.display = ('none')
        servicost.style.display = ('none')
        valorest.style.display = ('block')
        contatot.style.display = ('none')
    }
}
function clicarcontato(){
sobret.style.display = ('none')
servicost.style.display = ('none')
valorest.style.display = ('none')
contatot.style.display = ('block')
}