class Timer {
  constructor(durationInput, startButton, pouseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pouseButton = pouseButton;

    this.startButton.addEventListener('click', this.start);
  }

  start() {
    console.log(this);
  }
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pouseButton = document.querySelector('#pouse');

const timer = new Timer(durationInput, startButton, pouseButton);
timer.start();
