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