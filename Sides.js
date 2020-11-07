class Sides{
    constructor(x,y){
        var options={
            'isStatic':true,
        }
        this.body.rectangle(x,y,20,100,options);
        this.body.width=200;
        this.body.height=20;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(2)
        stroke("black");
        fill("red");
        rect(0,0,this.body.width,this.body.height)
    }
}