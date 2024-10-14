class MusicScreen {
  constructor() {
    this.gifDisplay = document.getElementById('gif-display');
    this.controlBar = document.getElementById('control-bar');
    this.playButton = document.getElementById('play-button');
    this.isPlaying = false;
    this.audioPlayer = new AudioPlayer(); // Create an instance of AudioPlayer

    this.playButton.addEventListener('click', () => this.togglePlayPause());
  }

  show() {
    document.getElementById('music').classList.remove('hidden');
  }

  hide() {
    document.getElementById('music').classList.add('hidden');
  }

  async setSong(songUrl) {
    this.audioPlayer.setSong(songUrl); // Set the song in the AudioPlayer
    document.getElementById('current-song').textContent = songUrl; // Display the current song
  }

  togglePlayPause() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  play() {
    this.audioPlayer.play(); // Play the music
    this.isPlaying = true;
    this.playButton.querySelector('img').src = 'images/pause.png'; // Change to pause image
  }

  pause() {
    this.audioPlayer.pause(); // Pause the music
    this.isPlaying = false;
    this.playButton.querySelector('img').src = 'images/play.png'; // Change to play image
  }

  setGifBackground(theme) {
    this.fetchGifs(theme); // Fetch and display GIFs based on the theme
  }

  async fetchGifs(theme) {
    const encodedTheme = encodeURIComponent(theme);
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodedTheme}&limit=25&rating=g&api_key=dc6zaTOxFJmzC`;

    try {
      const response = await fetch(url);
      const json = await response.json();
      const randomGif = this.getRandomGif(json.data);
      this.gifDisplay.style.backgroundImage = `url(${randomGif})`; // Set GIF background
    } catch (error) {
      console.error("Error fetching gifs:", error);
    }
  }

  getRandomGif(gifData) {
    const randomIndex = Math.floor(Math.random() * gifData.length);
    return gifData[randomIndex].images.downsized.url; // Get the downsized gif URL
  }
}
