// app.js

class App {
  constructor() {
      this.menuScreen = new MenuScreen(this);
  }

  startMusicScreen(selectedSong, theme) {
      // Logic to switch to the music screen
      console.log('Starting music screen with:', selectedSong, theme);
      // You will need to create the MusicScreen and pass these values
  }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  new App();
});
