const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let dice,sw,sh,roll_1,roll_2,score,scoreList,numberOfDice;


dice = new Image();
dice.src = "dice.png"

numberOfDice = 2

scoreList = [];
for(let i = 2; i<=12;i++)
{
  scoreList.push(0)
}

dice.addEventListener('load',()=>
{
  sw = dice.width/6;
  sh = dice.height;


  setInterval (animate,500);
})

let numbers = [];
    for(let i = 0; i < numberOfDice; i++){
      numbers[i] = Math.floor(Math.random() * 6) + 1;
    }

    for(let i = 0; i < numbers.length; i++){
      context.drawImage(dice, (numbers[i] * dice.width/6) - dice.width/6, 0, dice.width/6, dice.height, 10 + ( i * dice.width/6), 50, 100, 100);
    }
   
    
function animate()
{
roll_1 = Math.floor(Math.random()*6) + 1;
roll_2 = Math.floor(Math.random()*6) + 1;
score = roll_1 + roll_2;
context.drawImage(dice.image,(roll_1-1)*sw,0,sw,sh,200,200,sw,sh);
context.drawImage(dice.image,(roll_1-1)*sw,0,sw,sh,400,200,sw,sh);
scoreList[score-2]++
console.log(score,scoreList);
}