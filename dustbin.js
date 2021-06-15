class DustBin{
    constructor(x,y){
        var options = {
            isStatic:true
        }
        this.thickness = 20;
        this.width  =200;
        this.height = 200;
       
        this.BottomBody = Bodies.rectangle(x,y,this.width,this.thickness,options);
        World.add(world,this.BottomBody);
        
        this.LeftBody = Bodies.rectangle(x-this.width/2,y-this.height/2,this.thickness,this.height,options);
        World.add(world,this.LeftBody);

        this.RightBody = Bodies.rectangle(x+this.width/2,y-this.height/2,this.thickness,this.height,options);
        World.add(world,this.RightBody);
    }
    display(){
        var posBottom = this.BottomBody.position;
        rectMode(CENTER);
        fill("green");
        rect(posBottom.x,posBottom.y,this.width,this.thickness);

        var posLeft = this.LeftBody.position;
        rectMode(CENTER);
        fill("green");
        rect(posLeft.x,posLeft.y,this.thickness,this.height);

        var posRight = this.RightBody.position;
        rectMode(CENTER);
        fill("green");
        rect(posRight.x,posRight.y,this.thickness,this.height);
    }
}