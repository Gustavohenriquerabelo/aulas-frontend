let totalMatchs = 0

console.log("Sobrevivente conectado ao DOM!")

const cabeçalho = document.querySelector('header');
console.log(cabeçalho)

const btnTema = document.querySelector('#btn-tema');
const boasVindas = document.querySelector('#boas-vindas');
const tituloSite = document.querySelector('header h1');
const listaBeneficios = document.querySelectorAll('ol li');

console.log(listaBeneficios.length)

const campoNome = document.querySelector('input[type="text"]');
const campoEmail = document.querySelector('input[type="email"]');

tituloSite.textContent = "The Walking Date";

document.querySelector('cite').innerHTML = "- <strong>Zezinnho da Foice</strong>, sobrevivente Nível 5";

const textoBoasVindas = document.querySelector('#boas-vindas p').textContent;
console.log(textoBoasVindas);

document.querySelector('aside').style.borderColor = 'var(--cor-sangue)';
document.querySelector('aside').style.fontSize = '1.1rem';

document.querySelector('img').getAttribute('alt', 'casal de zumbis apaixonados caminhando ao por do sol');

campoNome.value = "Sobrevivente Anônimo";

document.querySelector('tbody tr').classList.add('destaque-infectado');

const aviso = document.createElement('p');

aviso.textContent = "ALERTA DE HORDA: Vá apenas em encontros seguros!!";
aviso.style.background = 'var(--cor-sangue)';
aviso.style.textAlign = 'center';

document.getElementById('#barra-alerta').appendChild(aviso);

const novoBeneficio = document.createElement('li').textContent = 'Seguro contra perda de membros durante o primeiro encontro';

document.querySelector('#beneficio ol').appendChild(novoBeneficio);

document.getElementById('#fecrar-alerta').addEventListener('click', document.querySelector('#barra-alerta').remove())

const htmlRoot = document.documentElement

function click()
{
    if(htmlRoot.getAttribute('data-theme') == 'light')
        {
            htmlRoot.removeAttribute('data-theme')
            btnTema.textContent = 'Modo Sobrevivencia';
        }
        else
        {
            htmlRoot.setAttribute('data-theme', 'light')
            btnTema.textContent = 'Modo Sombrio';
        }
}

btnTema.addEventListener('click', click())

document.querySelector('.botao-match').addEventListener('click', function(event){
    event.target.textContent = "match Confirmado";
    totalMatchs += 1
    event.target.disabled = true;
    document.querySelector('#placar-matches').innerHTML = "Matches: ", totalMatchs;
})


