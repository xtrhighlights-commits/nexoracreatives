gsap.from(".logo",{
  y:-100,
  opacity:0,
  duration:1
})

gsap.from(".title",{
  y:50,
  opacity:0,
  delay:0.5,
  duration:1
})

gsap.from(".tagline",{
  y:50,
  opacity:0,
  delay:1,
  duration:1
})

gsap.from(".cta",{
  scale:0,
  delay:1.5,
  duration:0.6
})

gsap.from(".card",{
  scrollTrigger:{
    trigger:".services",
    start:"top 80%"
  },
  y:100,
  opacity:0,
  stagger:0.2
})
