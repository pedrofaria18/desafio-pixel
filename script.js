// Pega imagem
const img = document.getElementById('img');

// Cria um canvas com o tamanho da imagem no contexto 2d;
const canvas = document.createElement("canvas");
canvas.width = img.width;
canvas.height = img.height;
const context = canvas.getContext("2d");

// Desenha img no canvas, com a imagem e as cordenadas desejadas
context.drawImage(img, 0, 0);

//Desenhando o canvas pixel a pixel
const data = context.getImageData(0, 0, canvas.width, canvas.height).data;

// Para cada pixel temos que definir as cores red(r), green(g), blue(b)
var r, g, b;
const coresPresentes = {};

for (let i = 0; n = data.length, i < n; i += 4) {
  r = data[i]; // red
  g = data[i + 1]; // green
  b = data[i + 2]; // blue

  const hex = rgbToHex(r, g, b);

  if (coresPresentes[hex] === undefined) {
    coresPresentes[hex] = 1;
  } else {
    coresPresentes[hex]++;
  }
}

function componentToHex(number) {
  var hex = number.toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

console.log(JSON.stringify(coresPresentes));
