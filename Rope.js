class Rope{
    constructor(objectA, objectB){
        var options = {
            bodyA:objectA,
            pointB:objectB,
            stiffness: 0.03,
            length:250
        }
         this.pointB =objectB
         this.rope = Constraint.create(options)
         World.add(world,this.rope);
    }
    fly(){
        this.rope.bodyA = null
    }
   

    display(){
        if (this.rope.bodyA){
        var pointA = this.rope.bodyA.position
        var pointB = this.pointB
        push();
        strokeWeight(6)
        stroke("neon")
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop();
        }
    }
}