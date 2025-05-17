const text = '"Carregamos oportunidades, conectamos ideias, transformamos o futuro!"';
const textElement = document.getElementById("slogan-text");
let index = 0;
console.log ("funfando")
function typeText() {
  if (index < text.length) {
    textElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 60);
  } else {
    setTimeout(() => {
      textElement.textContent = "";
      index = 0;
      setTimeout(typeText, 500); 
    }, 2000);
  }
}

window.onload = typeText;