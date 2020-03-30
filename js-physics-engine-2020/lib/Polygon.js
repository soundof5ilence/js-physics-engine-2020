class Polygon {

    constructor(points){
      this.points = points;
    }
  
    draw(context){
      for (let i = 0;i<this.points.length-1;i++){
        context.beginPath();
        context.fillStyle = "rgb(230,40,40)";
        context.font = "16px Arial";
        context.moveTo(this.points[i].x,this.points[i].y);
        context.lineTo(this.points[i+1].x,this.points[i+1].y);
        context.fillText(i+1, this.points[i].x, this.points[i].y-10);
        context.closePath();
        context.stroke();
        context.fill();
        this.points[i].draw(context);
      }
  
    }
  }

