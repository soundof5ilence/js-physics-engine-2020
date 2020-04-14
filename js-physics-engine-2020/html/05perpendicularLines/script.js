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
let C = new Point(200,500,30,"yellow",true);
myLine = new LinearFunction(-0.5,0);
m = new LinearFunction(1,1);

function animate(){
  context.clearRect(0,0,width,height)
  
  A.draw(context);
  B.draw(context);
  C.draw(context);
  

  myLine.slope = (B.y - A.y)/(B.x -A.x);
  // y = m*x + b
  // y - m*x = b
  // b=y - m*x

  myLine.intercept = B.y - myLine.slope*B.x;
  myLine.slope = (B.y -A.y)/(B.x - A.x);
  myLine.draw(context,"green");

m.slope = -1/myLine.slope;
m.intercept = C.y - C.x * m.slope;

m.draw(context);

}

setInterval(animate,10);