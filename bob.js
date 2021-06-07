class Bob {
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:1.0,
            density:0.8,
            
        }
        this.x=x;
        this.y=y;
        this.r=r;

        this.body=Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);

    }

    display(){
        var paper = this.body.position;
        push();
        translate(paper.x,paper.y);
        ellipseMode(RADIUS);
        fill("black");
        ellipse(0,0,this.r,this.r);
        pop();
    }
}