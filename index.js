const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pouseButton = document.querySelector('#pouse');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let currentoffset = 0;
const timer = new Timer(durationInput, startButton, pouseButton, {
  onStart() {
    console.log('Timer started');
  },
  onTick(timeRemaining) {
    circle.setAttribute('stroke-dashoffset', currentoffset);
    currentoffset = currentoffset - 1;
  },
  onComplete() {
    console.log('Timer is completed');
  }
});
