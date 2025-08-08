// Setup Paper.js with the canvas
paper.setup(document.getElementById('myCanvas'));

// Create a circle
const circle = new paper.Path.Circle({
  center: paper.view.center,
  radius: 50,
  fillColor: 'dodgerblue'
});

// Movement config
var speed = 1;
const keys = {};

// Track key states
document.addEventListener('keydown', e => {
  keys[e.key.toLowerCase()] = true;
});

document.addEventListener('keyup', e => {
  keys[e.key.toLowerCase()] = false;
});

// Move the circle each frame
paper.view.onFrame = () => {
  if (keys['arrowup'] || keys['w']) {
    circle.position.y -= speed;
  }
  if (keys['arrowdown'] || keys['s']) {
    circle.position.y += speed;
  }
  if (keys['arrowleft'] || keys['a']) {
    circle.position.x -= speed;
  }
  if (keys['arrowright'] || keys['d']) {
    circle.position.x += speed;
  }
};
