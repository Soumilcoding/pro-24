class paper {
constructor(){
 var options={
 isStatic : false,
 restitution : 0.3,
 friction : 0.5,
 density : 1.2
 }
 this.body = Bodies.circle(x, y, width, height, options);
 this.width = width;
 this.height = height;




}

}
function keyPressed(){
if(keyCode === UP_ARROW){

Matter.body.applyForce(paperObject.body, paperObject.body.position,{x:85,y:-85});

}


}