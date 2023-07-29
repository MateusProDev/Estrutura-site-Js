/*const { createApp, ref } = Vue;

  createApp({
    setup() {
      const name = ref('Hello vue!')
      return {
        name
      }
    }
  }).mount('#app');*/

//estrutura do header
const divNav = document.createElement('header');
const navegation = document.createElement('nav');
const listNot = document.createElement('ul');
const lineUm = document.createElement('li');
const lineDois = document.createElement('li');
const lineTres = document.createElement('li');

lineUm.innerHTML ='HOME';
lineDois.innerHTML = 'SOBRE';
lineTres.innerHTML = 'CONTATOS';

listNot.appendChild(lineUm);
listNot.appendChild(lineDois);
listNot.appendChild(lineTres);
navegation.appendChild(listNot);
divNav.appendChild(navegation);
document.body.appendChild(divNav);


//conteudo do main
const divElement = document.createElement('main');
const heading = document.createElement('h1');
const paragraph = document.createElement('p');
const imagen = document.createElement('img');

heading.innerHTML = 'Meu primeiro site com a estrutura em Javascrip';
paragraph.innerHTML = 'A estrutura de marcação deste site é criada em JavaScrip';
imagen.setAttribute('src', '#');

divElement.appendChild(heading);
divElement.appendChild(paragraph);
divElement.appendChild(imagen);

document.body.appendChild(divElement);