
const botaoAlterarTema = document.getElementById('botao-alterar-tema');

const body = document.querySelector('body');

const imagemBotao = document.querySelector('.imagem-botao'); 

botaoAlterarTema.addEventListener('click', ()=> {
   
const contClasse = body.classList.contains('modo-escuro');

body.classList.toggle("modo-escuro");

  if(contClasse){    
    imagemBotao.setAttribute('src','./imagens/sun.png');
  } else {   
    imagemBotao.setAttribute('src','./imagens/moon.png');
  }  
});


 