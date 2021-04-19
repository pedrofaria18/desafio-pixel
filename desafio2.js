const img = document.querySelector('img');

const canvas = document.createElement("canvas");
canvas.width = img.width;
canvas.height = img.height;
const context = canvas.getContext("2d");
context.drawImage(img, 0, 0, canvas.width, canvas.height);

/*
  Img to Base64
*/
var base64 = canvas.toDataURL();
console.log(base64);



/*
  Para 3 cores achadas, tentar montar um número binário válido
*/
const data = context.getImageData(0, 0, canvas.width, canvas.height).data;
const p = document.querySelector('p');
var r, g, b;

for (let i = 0; i < data.length; i+=4) {
  r = data[i];
  g = data[i + 1];
  b = data[i + 2];

  const rgb = `rgb(${r}, ${g}, ${b})`;

  if(rgb == "rgb(255, 255, 255)") {
    p.innerHTML += 0
  } else if(rgb == "rgb(96, 192, 0)") {
    p.innerHTML += 1
  }
}