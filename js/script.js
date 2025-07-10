// Hamburguer Menu Toggle

const toggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

toggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});


//Carrossel de imagens

const imagens = [
  'image/Fotos-usina-da-paz/usina1.jpeg',
  'image/Fotos-usina-da-paz/usina2.jpeg',
  'image/Fotos-usina-da-paz/usina3.jpeg',
  'image/Fotos-usina-da-paz/usina4.jpeg',
  'image/Fotos-usina-da-paz/usina5.jpeg',
  'image/Fotos-usina-da-paz/usina6.jpeg',
];

const fraseEl = document.getElementById('frase');

let ordemAleatoria = imagens.sort(() => Math.random() - 0.5);
let indiceAtual = 0;
const imagemElemento = document.getElementById('imagem-carrossel');

function mostrarImagem(index) {
  imagemElemento.style.opacity = 0;

  setTimeout(() => {
    imagemElemento.src = ordemAleatoria[index];
    imagemElemento.style.opacity = 1;
  }, 300);
}

function proximaImagem() {
  indiceAtual = (indiceAtual + 1) % ordemAleatoria.length;
  mostrarImagem(indiceAtual);
}

function imagemAnterior() {
  indiceAtual = (indiceAtual - 1 + ordemAleatoria.length) % ordemAleatoria.length;
  mostrarImagem(indiceAtual);
}

document.querySelector('.carrossel-btn.next').addEventListener('click', proximaImagem);
document.querySelector('.carrossel-btn.prev').addEventListener('click', imagemAnterior);

mostrarImagem(indiceAtual);

let touchStartX = 0;
let touchEndX = 0;

const carrossel = document.querySelector('.carrossel');

carrossel.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

carrossel.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipeGesture();
});

function handleSwipeGesture() {
  const dist = touchEndX - touchStartX;
  const limiar = 50;

  if (Math.abs(dist) > limiar) {
    if (dist < 0) {
      proximaImagem();
    } else {
      imagemAnterior();
    }
  }
}