// This works like regular JavaScript, not PaperScript

// Setup the canvas using paper.js
paper.setup(document.getElementById('myCanvas'));

// Create a circle
const circle = new paper.Path.Circle({
  center: paper.view.center,
  radius: 80,
  fillColor: 'orange'
});

// Animate it (optional)
paper.view.onFrame = function(event) {
  circle.rotate(1);
};
