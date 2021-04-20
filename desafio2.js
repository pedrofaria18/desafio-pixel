// Modelo padrão de criação do canvas
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
var binary = '';
var r, g, b;

for (let i = 0; i < data.length; i+=4) {
  r = data[i];
  g = data[i + 1];
  b = data[i + 2];

  const rgb = `rgb(${r}, ${g}, ${b})`;

  if(rgb == "rgb(255, 255, 255)") {
    binary += 0
  } else if(rgb == "rgb(96, 192, 0)") {
    binary += 1
  }
}
console.log(binary)





/**
 * Utilizando uma biblioteca de reconhecimento de texto em imagens
*/
document.getElementById("imgToText").addEventListener("click", function(){
  Tesseract.recognize("./Syngenta.bmp").then(function(result){
    console.log(result);
  })
});