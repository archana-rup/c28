class Rope {
    constructor(bodA,bodB,X,Y){

        this.offesetX=X;
        this.offsetY=Y;

        var options={
            bodyA:bodA,
            bodyB:bodB,
            //stiffness:0.04,
            length:500,

        }
        this.chain=Matter.Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var pointA=this.chain.bodyA.position;
        var pointB= this.chain.bodyB.position;

        strokeWeight(4);

        var AnchorX=pointB.x+this.offesetX;
        var AnchorY=pointB.y+this.offsetY;

        line(pointA.x,pointA.y,AnchorX,AnchorY);
    }
}
