class Timer {
  constructor(duractionInput, startButton, pouseButton) {
    this.duractionInput = duractionInput;
    this.startButton = startButton;
    this.pouseButton = pouseButton;

    this.startButton.addEventListener('click', this.start);
  }

  start() {
    console.log('Time to start the timer!');
  }
}
