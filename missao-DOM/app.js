
// passo 1 - Inicio missão -----------------------------------

console.log("Inicio da missão");
console.log(document);
//------------------------------------------------

//passso 2 - ID (#) ---------------------------------

        const titulo = document.querySelector('#titulo');

        titulo.textContent = 'aula de DOM';
        titulo.style.color = 'red';

//--------------------------------------------

//passo 3 classse --------------------------------

 const p1 = document.querySelector('.texto');
 p1.style.fontWeight = 'bold';

 const textos = document.querySelectorAll('.texto');
  textos.forEach(p=> p.style.color = 'green');

  //-----------------------------------------

  // passo 4 tag e combinação ---------------------

  const caixa = document.querySelector('div');
  caixa.style.border = '3px solid blue';
  caixa.style.padding = '20px';

  const campoNome = document.querySelector('.container input[type="text"]');

  campoNome.value = 'maria';

  //----------------------------------------------------------------------

//passo 5 - texto, html e atribute -----------------------------------

textos[1].innerHTML = 'segundo com <em>ênfase</em>';

const campoEmail = document.querySelector('input[type="email"]');

campoEmail.setAttribute('placeholder', 'seu@email..com');

//----------------------------------