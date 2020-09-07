const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let img,angle,angle2,img2,img3;

img = new Image();
img.src = "cog.png";

img2 = new Image();
img2.src = "cog.png";

img3 = new Image();
img3.src = "cog.png";

angle = 0.5;
angle2 = -0.2;

img.addEventListener('load',()=>{
    setInterval(animate,10)

})

function animate(){
    context.clearRect(0,0,width,height);
    context.save();
    context.translate(150,150);
    context.rotate(angle);
    context.drawImage(img,-150,-150,300,300);
    context.restore();

    context.save();
    context.translate(420,150);
    context.rotate(angle2);
    context.drawImage(img2,-150,-150,300,300);
    context.restore();

    context.save();
    context.translate(690,150);
    context.rotate(angle);
    context.drawImage(img3,-150,-150,300,300)
    context.restore();

    angle += 0.01;
    angle2 -= 0.01;
}