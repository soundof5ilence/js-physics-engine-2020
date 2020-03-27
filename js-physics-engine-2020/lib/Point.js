/*
	23-2-2020
	klasse om punten op de 2d context van een canvas te tekenen

	eigenschappen
	* pos (positie van het middelpunt m.b.v. een Vector2d)
	* radius (grootte van de cirkel in pixels)
	* color (kleur van het punt, als String)
*/

class Point {

  constructor(x,y,radius,color,draggable){
    this.color =color;
    this.x =x;
    this.y =y;
    this.radius = radius;
    //this.draggable = draggable || false; ik weet niet of deze wrkt fus heb ik het opnieuw gedaan
    this.draggable = false || draggable;

   //if(draggable) {this.drag();}
   if(this.draggable) this.Drag();

  }
draw(context){
		// hier komt de constructor
    context.beginPath();
    context.fillStyle="rgba(255,500,100,4)";
    context.arc(this.x, this.y, this.radius, 0, 2*Math.PI)
    context.closePath();
    context.stroke();
    context.fill();
  }
 
  Drag(){

    let distance = 1000;
    let dragging = false
  
    addEventListener("mousedown", (e) => {
      //functie om te kijken of de muis op de circle staat
      if(pointInCircle(e.clientX, e.clientY, this.x, this.y, this.radius)){
      this.x = e.clientX	
  this.y = e.clientY
  this.dragging = true;
      }
    });
    
    addEventListener("mousemove", (e) => {
      if(this.dragging == true){
  this.x = e.clientX	
  this.y = e.clientY
      }
    })
  
    addEventListener("mouseup", (e)=>{
  this.dragging = false
    });
  }
  
  
  }
  

addEventListener('mousemove', (evt) =>{
  if(dragging){
    this.x = evt.clientX;
    this.y = evt.clientY;
  }




})
addEventListener('mouseup' , () =>{
  dragging = false;

})

function pointInCircle(x, y, cx, cy, radius) {
	var distancesquared = (x - cx) * (x - cx) + (y - cy) * (y - cy);
	return distancesquared <= radius * radius;
  }
  
  //let CircleObject = {x:getRandomInt(0,width),y:getRandomInt(0,height),radius:50,color:"rgb("+getRandomInt(100,500)+","+getRandomInt(500,255)+","+getRandomInt(500,200)+")",velocity_x:50,velocity_y:70}

		//hier komt de code om een cirkel te tekenen


