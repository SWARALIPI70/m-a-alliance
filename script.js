gsap.registerPlugin(ScrollTrigger);

const cardWidth = 420 + 40; // card width + gap
const numCards = document.querySelectorAll('.sector-card').length;
const totalScrollWidth = cardWidth * numCards - window.innerWidth;

// Increase this value to push the first card further right initially
const partialVisible = 50; // how much of the first card is visible initially (in px)
const initialOffset = cardWidth + (window.innerWidth / 2) - partialVisible; 
// This pushes the track more right, so first card is near far right edge but partially visible

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".our-sectors-horizontal",
    start: "top top",
    end: () => "+=" + (totalScrollWidth + initialOffset),
    scrub: true,
    pin: true,
    anticipatePin: 1,
  }
});

// Animate from initial offset (first card near far right edge) to fully aligned left (x=0)
tl.fromTo(".sectors-track",
  { x: initialOffset },
  { x: 0, duration: 1, ease: "power1.out" }
);

// Then scroll left to reveal the rest of the cards
tl.to(".sectors-track",
  { x: -totalScrollWidth, duration: 1, ease: "none" }
);
