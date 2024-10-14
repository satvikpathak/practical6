class PlayButton {
  constructor(audioPlayer) {
    this.audioPlayer = audioPlayer; // Store reference to AudioPlayer
    this.button = document.createElement('button'); // Create button element
    this.button.textContent = 'Play/Pause'; // Button text
    document.body.appendChild(this.button); // Add button to DOM

    this.button.addEventListener('click', () => {
      this.togglePlay(); // Toggle playback on click
    });
  }

  togglePlay() {
    if (this.audioPlayer.dancer.isPlaying) {
      this.audioPlayer.pause(); // Pause if currently playing
      this.button.textContent = 'Play'; // Update button text
    } else {
      this.audioPlayer.play(); // Play if currently paused
      this.button.textContent = 'Pause'; // Update button text
    }
  }
}
