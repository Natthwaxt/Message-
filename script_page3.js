// Initialize Splitting.js
Splitting();

// Select all elements with the class 'char'
const chars = document.querySelectorAll('.char');

// Function to create an object containing references to elements by their respective IDs
const elements = {
  one: document.querySelectorAll('.col1-row1 .triangle'),
  two: document.querySelectorAll('.col2-row1 .triangle'),
  three: document.querySelectorAll('.col3-row1 .triangle'),
  four: document.querySelectorAll('.col4-row1 .triangle'),
  five: document.querySelectorAll('.col1-row2 .triangle'),
  six: document.querySelectorAll('.col2-row2 .triangle'),
  seven: document.querySelectorAll('.col3-row2 .triangle'),
  eight: document.querySelectorAll('.col4-row2 .triangle'),
  nine: document.querySelectorAll('.col1-row3 .triangle'),
  ten: document.querySelectorAll('.col2-row3 .triangle'),
  eleven: document.querySelectorAll('.col3-row3 .triangle'),
  twelve: document.querySelectorAll('.col4-row3 .triangle'),
  thirteen: document.querySelectorAll('.col1-row4 .triangle'),
  fourteen: document.querySelectorAll('.col2-row4 .triangle'),
  fifteen: document.querySelectorAll('.col3-row4 .triangle'),
  sixteen: document.querySelectorAll('.col4-row4 .triangle'),
};

// Function to create a timeline with specified configuration
const tl = new TimelineMax({
  delay: 1,
  //repeat: 1,
  yoyo: true,
});

// Function to set explode time and ease
const explodeTime = 2;
const explodeEase = Power0.easeNone;

// Function to create animation sequence
tl
  .to(elements.one, explodeTime, { x: -500, y: -500, ease: explodeEase }, 'explode')
  .to(elements.two, explodeTime, { x: 400, y: -500, ease: explodeEase }, 'explode')
  .to(elements.three, explodeTime, { x: -400, y: -500, ease: explodeEase }, 'explode')
  .to(elements.four, explodeTime, { x: 500, y: -500, ease: explodeEase }, 'explode')
  .to(elements.five, explodeTime, { x: -500, y: -500, rotate: '-30deg', ease: explodeEase }, 'explode')
  .to(elements.six, explodeTime, { x: -500, y: 500, rotate: '30deg', ease: explodeEase }, 'explode')
  .to(elements.seven, explodeTime, { x: 400, y: -500, rotate: '-30deg', ease: explodeEase }, 'explode')
  .to(elements.eight, explodeTime, { x: 500, y: 500, rotate: '30deg', ease: explodeEase }, 'explode')
  .to(elements.nine, explodeTime, { x: -500, y: 400, ease: explodeEase }, 'explode')
  .to(elements.ten, explodeTime, { x: -600, y: 700, ease: explodeEase }, 'explode')
  .to(elements.eleven, explodeTime, { x: 600, y: 700, ease: explodeEase }, 'explode')
  .to(elements.twelve, explodeTime, { x: 500, y: 400, ease: explodeEase }, 'explode')
  .to(elements.fourteen, explodeTime, { x: -500, y: 500, ease: explodeEase }, 'explode')
  .to(elements.fifteen, explodeTime, { x: 500, y: 500, ease: explodeEase }, 'explode')
  .staggerFrom(chars, 1.5, { opacity: 0, scale: 0, y: 80, rotationX: 180, transformOrigin: "0% 50% -50", ease: Back.easeOut }, 0.01, '-=1.2');
