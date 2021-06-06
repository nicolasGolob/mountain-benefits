let TL = new TimelineMax();
TL.to(".moonlight", 1, {y:+30 ,autoAlpha:1})
TL.to(".main-title", 1, {x:-30 ,autoAlpha:1})
.to(".valley-bottom", 1,{y:-100 ,autoAlpha:1}, "-=0.1")
.to(".mountain-left", 1,{y:-100 ,autoAlpha:1}, "-=0.1")
.to(".mountain-right", 1,{y:-100 ,autoAlpha:1}, "-=0.1")

/* content **/
const contents = gsap.utils.toArray('.content-text');
contents.forEach((content) => {
  gsap.to(content, { duration:1, y:0, autoAlpha: 1,
    scrollTrigger: {
        trigger: content,
        start: "top 95%",
        end: "bottom 30%",
        toggleActions : "play",
        scrub: true    }
    });
})


