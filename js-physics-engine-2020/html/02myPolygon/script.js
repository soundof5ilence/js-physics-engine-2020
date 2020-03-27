const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let points = [];

for (let i = 0; i<5;i++){
  let x = getRandomInt(0, width);
  let y = getRandomInt(0, height);
  let color = "rgba("+getRandomInt(0,255)+","+getRandomInt(0,255)+","+getRandomInt(0,255)+","+getRandomInt(1,10)/10+")";
  let myPoint = new Polypoint(x,y,20,color,);
  points.push(myPoint);
}
console.log(points);
function draw() {
  context.clearRect(0,0,width,height);
  for (let i = 0; i<points.length;i++){
    points[i].draw(context)
  }
}

setInterval(draw, 10);
