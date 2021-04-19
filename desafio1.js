// Pega imagem
const img = document.querySelector('img');

// Cria um canvas com o tamanho da imagem no contexto 2d;
const canvas = document.createElement("canvas");
canvas.width = img.width;
canvas.height = img.height;
const context = canvas.getContext("2d");

// Desenha img no canvas, com a imagem e as cordenadas desejadas
context.drawImage(img, 0, 0, canvas.width, canvas.height);

//Ler o canvas pixel a pixel
const data = context.getImageData(0, 0, canvas.width, canvas.height).data;

// Para cada pixel temos que definir as cores red(r), green(g), blue(b)
var r, g, b;

// Vetor para armezenar as cores
const coresPresentes = {
  verde: 0,
  branco: 0,
  preto: 0,
}

for (let i = 0; i < data.length; i+=4) {
  r = data[i]; // red
  g = data[i + 1]; // green
  b = data[i + 2]; // blue

  const rgb = `rgb(${r}, ${g}, ${b})`;

  if(rgb == "rgb(0, 0, 0)") {
    coresPresentes.preto++;
  } else if(rgb == "rgb(255, 255, 255)") {
    coresPresentes.branco++;
  } else if(rgb == "rgb(96, 192, 0)") {
    coresPresentes.verde++;
  }
}

console.log(coresPresentes);