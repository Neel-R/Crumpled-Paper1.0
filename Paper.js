class Paper {
    constructor (x,y) {
        var options={
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x, y,50, options);
        this.radius = 50;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipse(0, 0, this.radius,this.radius);
        pop(); 
    }
}