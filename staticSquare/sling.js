class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.03,
            length: 20
        }
        this.pointB = pointB
        this.Sling = Constraint.create(options);
        World.add(world, this.Sling);
    }
     fly(){
         this.Sling.bodyA = null
     }
     attach(body){
         this.Sling.bodyA = body;
     }
    display(){
        if(this.Sling.bodyA){
            var pointA = this.Sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(255)
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
    }
    
}