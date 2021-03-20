class Monster{
    constructor(x, y, r){
        var options = {
            'frictionAir' :1.0,
            'density' :1,
            'isStatic':true
        }
        this.x=x;
        this.y=y
        this.r=r
        this.image=loadImage("images/Monster-01.png");
        this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 100, 100);
        pop();
    }
}