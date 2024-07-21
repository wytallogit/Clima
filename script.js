const apiKey = "91d8315d13950cafcab7cec0349e6f20";
const apiContryURL = "https://countryflagsapi.com/png/"

const city = document.getElementById("cidade");


var atual = new Date()
var dia = atual.getDate()
var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro','Outubro', 'Novembro', 'Dezembro']
var mes = meses[atual.getMonth()]
var ano = atual.getFullYear()
var horas = atual.getHours()
var minutos = atual.getMinutes()

var imagem = document.getElementById('imagem')

var hoje = document.getElementById('hoje')
hoje.innerHTML = `${horas}:${minutos}, ${dia} de ${mes} de ${ano}`

function carregar() {
    if (horas >= 0 && horas <= 5) {
       imagem.src = 'imagens/noite-pc.png' 
       document.body.style.background = '#40019A'
    } else if (horas <= 11) {
        imagem.src = 'imagens/sol-pc'
        document.body.style.background = '#FFED4B'
    } else if (horas <= 17) {
        imagem.src = 'imagens/dia-sol-pc'
        document.body.style.background = '#7FE0E9'
    } else if (horas <= 24) {
        imagem.src = "imagens/noite-pc.png"
        document.body.style.background = '#40019A'
    } else {
        imagem.remove();
    }
    
}
