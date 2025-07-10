// Mapeando os Projetos Crianima

const projetos = [
  {
    nome: "Aventura da Joaninha",
    descricao: "Uma joaninha corajosa enfrentando desafios com criatividade!",
    src: "https://scratch.mit.edu/projects/1191935732/embed"
  },
  {
    nome: "Missão Espacial",
    descricao: "Exploração do espaço com foguetes animados e comandos interativos.",
    src: "https://scratch.mit.edu/projects/1191935732/embed"
  },
  {
    nome: "Mundo Submarino",
    descricao: "Um mergulho em aventuras subaquáticas programadas por crianças.",
    src: "https://scratch.mit.edu/projects/1191935732/embed"
  },
  {
    nome: "Desafio dos Códigos",
    descricao: "Um quiz divertido para testar lógica e programação.",
    src: "https://scratch.mit.edu/projects/1191935732/embed"
  }
];

const gallery = document.getElementById("gallery");

projetos.forEach((projeto, index) => {
  const figure = document.createElement("figure");
  figure.classList.add("item");
  figure.style.setProperty("--delay", `${0.4 + index * 0.4}s`);

  figure.innerHTML = `
    <iframe 
      src="${projeto.src}" 
      allowtransparency="true" 
      width="300" 
      height="250" 
      frameborder="0" 
      scrolling="no" 
      allowfullscreen 
      style="max-width: 100%;">
    </iframe>
    <div class="item-description">
      <h3>${projeto.nome}</h3>
      <p>${projeto.descricao}</p>
    </div>
  `;

  gallery.appendChild(figure);
});