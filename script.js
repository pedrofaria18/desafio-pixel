// Pega imagem
const img = document.querySelector('img');

// Cria um canvas com o tamanho da imagem no contexto 2d;
const canvas = document.createElement("canvas");
canvas.width = img.width;
canvas.height = img.height;
const context = canvas.getContext("2d");

// Desenha img no canvas, com a imagem e as cordenadas desejadas
context.drawImage(img, 0, 0);

//Ler o canvas pixel a pixel
const data = context.getImageData(0, 0, canvas.width, canvas.height).data;

// Para cada pixel temos que definir as cores red(r), green(g), blue(b)
var r, g, b;

// Vetor para armezenar as cores
const coresPresentes = {};

for (let i = 0; i < data.length; i += 4) {
  r = data[i]; // red
  g = data[i + 1]; // green
  b = data[i + 2]; // blue

  const hex = rgbToHex(r, g, b);

  // Insere no vetor Cores presentes as cores
  if (coresPresentes[hex] === undefined) {
    coresPresentes[hex] = 1;
  } else {
    coresPresentes[hex]++;
  }
}

// Transformando a imagem de RGB para HEX
function rgbToHex(r, g, b) {
  return "#" + numberToHex(r) + numberToHex(g) + numberToHex(b);
}

function numberToHex(number) {
  var hex = number.toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
}

console.log(coresPresentes);
