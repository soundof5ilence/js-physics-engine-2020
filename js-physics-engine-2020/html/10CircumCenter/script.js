const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

//create namespace
let A,B,C;
let lAB,lBC,lCA;
let MAB,MBC,MCA
let lAMBC,lBMCA,lCMAB;
let circumCenter;



A = new Point(100,100,20,"red",true,"A");
B = new Point(600,150,20,"green",true,"B");
C = new Point(300,300,20,"blue",true,"C");

MBC = new Point(50,50,10,"white",false,"BC");
MAB = new Point(50,50,10,"white",false,"AB");
MCA = new Point(50,50,10,"white",false,"CA");


lAB = new LinearFunction(0.5,1);
lCA = new LinearFunction(0.5,1);
lBC = new LinearFunction(0.5,1);



lAMBC = new LinearFunction(2,100);
lBMCA = new LinearFunction(2,100);
lCMAB = new LinearFunction(2,100);

function animate()
{
context.clearRect(0,0,width,height)
context.beginPath();
context.moveTo(A.x,A.y);
context.lineTo(B.x,B.y);
context.lineTo(C.x,C.y);
context.closePath();
context.stroke();

A.draw();
B.draw();
C.draw();



MBC.x = (B.x + C.x)/2;
MBC.y = (B.y + C.y)/2;
MBC.draw()

MAB.x = (A.x + B.x)/2;
MAB.y = (A.y + B.y)/2;
MAB.draw()

MCA.x = (C.x + A.x)/2;
MCA.y = (C.y + A.y)/2;
MCA.draw()


lAB.slope = -1/AB.slope;
lAB.intercept = B.y - B.x * lAB.slope;

lCA.slope = -1/CA.slope;
lCA.intercept = A.y - A.x * lCA.slope;

lBC.slope = -1/BC.slope;
lBC.intercept = C.y - C.x * lBC.slope;

lAMBC.slope = (A.y - MBC.y)/(A.x - MBC.x);
lAMBC.intercept = A.y - A.x * lAMBC.slope;

lBMCA.slope = (B.y - MCA.y)/(B.x - MCA.x);
lBMCA.intercept = B.y - B.x * lBMCA.slope;

lCMAB.slope = (C.y - MAB.y)/(C.x - MAB.x);
lCMAB.intercept = C.y - C.x * lCMAB.slope;

lAB.draw(context,"red");
lBC.draw(context,"red");
lCA.draw(context,"red");
lBMCA.draw(context,"gray")
lAMBC.draw(context,"gray")
lCMAB.draw(context,"gray")

circumCenter.x = lAB.intersection(lBC).x;
circumCenter.y = lAB.intersection(lBC).y;
circumCenter.draw();


let dx = circumCenter.x = A.x;
let dy = circumCenter.y = A.y;
distance = Math.sprt(dx*dx + dy*dy)


}


setInterval(animate,10)