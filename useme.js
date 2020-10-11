class useme{
    constructor(x,y,width,height,angle){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,angle,options);
        this.width=width,
        this.height=height;
        this.x=x;
        this.y=y;
        
        Matter.Body.setAngle(this.body,angle)
       
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        push ();
        translate(pos.x,pos.y);
        rotate (this.angle);
        rectMode(CENTER);
        fill ("red")
        rect(pos.x,pos.y,this.width,this.height)
        pop ();
    }
}