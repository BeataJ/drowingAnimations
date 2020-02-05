class Timer {
  constructor(durationInput, startButton, pouseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pouseButton = pouseButton;

    this.startButton.addEventListener('click', this.start);
    this.pouseButton.addEventListener('click', this.pouse);
  }

  start = () => {
    this.tick();
    this.interval = setInterval(this.tick, 1000);
  };

  pouse = () => {
    clearInterval(this.interval);
  };

  tick = () => {
    const timeRemaining = parseFloat(this.durationInput.value);
    this.durationInput.value = timeRemaining - 1;
  };
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pouseButton = document.querySelector('#pouse');

const timer = new Timer(durationInput, startButton, pouseButton);
