class Timer {
  constructor(durationInput, startButton, pouseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pouseButton = pouseButton;

    this.startButton.addEventListener('click', this.start);
  }

  start = () => {
    setInterval(this.tick, 1000);
  };

  tick = () => {
    console.log('tick');
  };
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pouseButton = document.querySelector('#pouse');

const timer = new Timer(durationInput, startButton, pouseButton);
