class Dustbin {
    constructor(x,y,width,height,/*image*/){
        var options={
            'isStatic':true
        }
        this.body = Bodies.rectangle(x, y,width,height, options);
        this.width = width;
        //this.image = loadImage(image);
        World.add(world, this.body);
    }
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop(); 
    }
}