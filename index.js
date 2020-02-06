const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pouseButton = document.querySelector('#pouse');
const circle = document.querySelector('circle');

const timer = new Timer(durationInput, startButton, pouseButton, {
  onStart() {
    console.log('Timer started');
  },
  onTick() {
    console.log('Timer is ticked down');
  },
  onComplete() {
    console.log('Timer is completed');
  }
});
