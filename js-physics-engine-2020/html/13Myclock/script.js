const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let time, clockFace, hoursHand, minutesHand, secondsHand;
let seconds, minutes, hours;

clockFace = new Image();
clockFace.src = "clockFace.png"

secondsHand = new Image();
secondsHand.src = "secondHand.png"

minutesHand = new Image();
minutesHand.src = "minutesHand.png"

hoursHand = new Image();
hoursHand.src = "hoursHand.png"

time = new Date();

setInterval(animate,10);

function animate (){
  time = new Date();
  seconds = time.getSeconds();
  minutes = time.getMinutes();
  hours = time.getHours();

  context.clearRect(0,0,width,height);
  context.drawImage(clockFace,0,0)
  //seconds
  context.save()
  context.translate(clockFace.width/2,clockFace.height/2)
  context.rotate(seconds*2*Math.PI/60);
  context.drawImage(secondsHand,-secondsHand.width/8,-secondsHand.height/4,secondsHand.width/4,secondsHand.height/4)
  context.restore()
  console.log(seconds)
  //minutes
  context.save()
  context.translate(clockFace.width/2,clockFace.height/2)
  context.rotate(minutes*2*Math.PI/60);
  context.drawImage(minutesHand,-minutesHand.width/6,-minutesHand.height/3,minutesHand.width/3,minutesHand.height/3)
  context.restore()
  console.log(minutes)
  //hours
  context.save()
  context.translate(clockFace.width/2,clockFace.height/2)
  context.rotate(hours*2*Math.PI/12);
  context.drawImage(hoursHand,-hoursHand.width/8,-hoursHand.height/4,hoursHand.width/4,hoursHand.height/4)
  context.restore()
  console.log(hours)
}

