const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

// declare namespace
let PointA,PointB,arrow,dx,dy;

PointA = new Point(100,100,15,"red",true);
PointB = new Point(400,300,15,"blue",true);

arrow = {}

arrow.sh = 50;
arrow.sw = 250;
arrow.hh = 80;
arrow.hw = 120;
arrow.color  = "rgba(200,200,200,0.5)";



arrow.draw = function()
{
  context.beginPath();
  context.fillstyle = arrow.color;
  context.moveTo(0,0);
  context.lineTo(0,arrow.sh);
  context.lineTo(arrow.sw,arrow.sh);
  context.lineTo(arrow.sw,arrow.hh);
  context.lineTo(arrow.sw + arrow.hw,0);
  context.lineTo(arrow.sw,-arrow.hh);
  context.lineTo(arrow.sw,-arrow.sh);
  context.lineTo(0,-arrow.sh);
  
  context.closePath();
  context.stroke();
  context.fill();
}


animate();

function animate()
{
  dx = PointB.x - PointA.x;
  dy = PointB.y - PointA.y;

  context.clearRect(0,0,width,height)
  window.requestAnimationFrame(animate);
  PointA.draw();
  PointB.draw();
  context.save();
  context.translate(PointA.x,PointA.y);
  context.rotate(Math.atan2(dy,dx));
  arrow.draw();
  context.restore();


  PointA.draw();
  PointB.draw();
}






