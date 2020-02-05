class Timer {
  constructor(durationInput, startButton, pouseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pouseButton = pouseButton;
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    this.startButton.addEventListener('click', this.start);
    this.pouseButton.addEventListener('click', this.pouse);
  }

  start = () => {
    if (this.onStart) {
      this.onStart();
    }
    this.tick();
    this.interval = setInterval(this.tick, 1000);
  };

  pouse = () => {
    clearInterval(this.interval);
  };

  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pouse();
    } else {
      this.timeRemaining = this.timeRemaining - 1;
      if (this.onTick) {
        this.onTick();
      }
    }
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {
    this.durationInput.value = time;
  }
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pouseButton = document.querySelector('#pouse');

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
