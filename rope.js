class rope{
    constructor(body1, body2, offsetX, offsetY)
    {
        this.offsetX = offsetX
        this.offsetY=offsetY
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        //console.log(options);
        this.rope=Constraint.create(options)
        World.add(world,this.rope)
    }
    display(){
        var pointA = this.rope.bodyA.position
        var pointBx = this.rope.bodyB.position.x + this.rope.pointB.x
        var pointBy = this.rope.bodyB.position.y + this.rope.pointB.y
        //console.log(pointBx);
        //console.log(pointBy);
        strokeWeight(3)
        line (pointA.x, pointA.y, pointBx, pointBy)
    }
}