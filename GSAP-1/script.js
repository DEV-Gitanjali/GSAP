// initial to final animation 

// gsap.to("#box" , {
//     x:1000 ,
//     duration:2,
//     rotate:360,
//     backgroundColor:"blue",
//     delay:1
// })

// final to initial annimation

// gsap.from("#box" , {
//     x:1000 ,
//     duration:2,
//     rotate:360,
//     backgroundColor:"blue",
//     delay:1
// })

// GSAP TimeLine
var tl = gsap.timeline()

tl.to("#box1" , {
    x:1000,
    rotate:360,
    scale:0.5 ,
    duration:2,
    // delay:1

})
tl.to("#box2" , {
    x:1000,
    rotate:360,
    scale:0.5 ,
    duration:2,
    // delay:1

})


tl.to("#box3" , {
    x:1000,
    rotate:360,
    scale:0.5 ,
    duration:2,
    // delay:1

})
