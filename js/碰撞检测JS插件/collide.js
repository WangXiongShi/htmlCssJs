function collideFn(bird,duct){
 // 小鸟的左边
    var birdLeft = bird.offsetLeft;

    // 小鸟的右边
    var birdRight = birdLeft + bird.offsetWidth;

    // 小鸟的上边
    var birdTop = bird.offsetTop;

    // 小鸟的下边
    var birdBottom = birdTop + bird.offsetHeight;

    // 管道的左边
    var ductLeft = duct.offsetLeft;

    // 管道的右边
    var ductRight = ductLeft + duct.offsetWidth;

    // 管道的上边
    var ductTop = duct.offsetTop;

    // 管道的下边
    var ductBottom = ductTop + duct.offsetHeight;
    if(birdRight >= ductLeft && birdBottom >= ductTop && birdLeft <= ductRight && birdTop <= ductBottom){

        return true;
    }else{

        return false;
    }
}
