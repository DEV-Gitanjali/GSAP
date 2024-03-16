var tl = gsap.timeline();

gsap.from("#nav h3" , {

    y:-50,
    opacity:0,
    delay:0.4 ,
    duration:1,
    stagger:0.1
})

tl.from("#main h1" , {
    x:-500,
    opacity:0,
    // delay:0.4,
    duration:0.8,
    stagger:0.3
})
