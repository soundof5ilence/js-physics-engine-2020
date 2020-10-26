const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let img, numberOnARow, numberOnAColumn, sx, sy, sw, sh, x, y, w, h, index;
img = new Image();
img.src = "cardDeck.png";

let cardsPulled = 12;

numberOnARow = 13;
numberOnAColumn = 5;

img.addEventListener('load', () =>{
  sw = img.width/numberOnARow;
  sh = img.height/numberOnAColumn;
  for (let i=0;i<cardsPulled;i++){
    index = Math.floor(Math.random()*52);
    animate(i);
  }
})

function animate(i){
  sx = (index%numberOnARow)*sw;
  sy = Math.floor(index/numberOnARow)*sh;
  context.drawImage(img, sx, sy, sw, sh, width/2/(cardsPulled/2)+100*i, height-245, sw, sh);
}