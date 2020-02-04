class Timer {
  constructor(durationInput, startButton, pouseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pouseButton = pouseButton;

    this.startButton.addEventListener('click', this.start);
  }

  start() {
    console.log('Time to start the timer!');
  }
}
