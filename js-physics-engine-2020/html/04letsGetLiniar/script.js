const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let myLine = new LinearFunction(-0.5,300);

let A = new Point(100,200,40,"red",true);
let B = new Point(500,200,20,"blue",true);

function animate(){
  context.clearRect(0,0,width,height)
  
  A.draw(context);
  B.draw(context);

  myLine.slope = (B.y - A.y)/(B.x -A.x);
  // y = m*x + b
  // y - m*x = b
  // b=y - m*x

  myLine.intercept = B.y - myLine.slope*B.x;

  myLine.draw(context,"green");
}

setInterval(animate,10);