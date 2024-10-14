// menu-screen.js

class MenuScreen {
  constructor(app) {
      this.app = app;  // Pass the app instance if needed
      this.songSelector = document.getElementById('song-selector');
      this.themeInput = document.getElementById('theme-input');
      this.form = document.getElementById('menu-form');
      this.error = document.getElementById('error');

      this.themes = ['candy', 'charlie brown', 'computers', 'dance', 'donuts', 'hello kitty', 'flowers', 'nature', 'turtles', 'space'];

      // Populate songs and theme input
      this.populateSongSelector();
      this.prepopulateTheme();

      // Handle form submission
      this.form.addEventListener('submit', (event) => {
          event.preventDefault();
          this.handleFormSubmit();
      });
  }

  // Fetch songs.json and populate the select element
  async populateSongSelector() {
      try {
          const response = await fetch('./CS402_Web_Technologies_files/songs.json');
          const songs = await response.json();

          // Clear any existing options (if necessary)
          this.songSelector.innerHTML = '';

          // Add an option for each song
          songs.forEach(song => {
              const option = document.createElement('option');
              option.value = song.url;
              option.textContent = song.title;
              this.songSelector.appendChild(option);
          });
      } catch (error) {
          console.error('Error fetching song list:', error);
      }
  }

  // Prepopulate the theme input with a random theme
  prepopulateTheme() {
      const randomTheme = this.themes[Math.floor(Math.random() * this.themes.length)];
      this.themeInput.value = randomTheme;
  }

  // Handle form submission
  handleFormSubmit() {
      const selectedSong = this.songSelector.value;
      const theme = this.themeInput.value.trim();

      if (!selectedSong || !theme) {
          this.error.classList.remove('inactive');
          return;
      }

      // Hide the menu
      document.getElementById('menu').classList.add('hidden');

      // Print out the song and theme (this will be replaced by navigating to the music screen later)
      console.log('Selected Song:', selectedSong);
      console.log('Theme:', theme);

      // You can call any app logic here to switch to the music screen
      this.app.startMusicScreen(selectedSong, theme);
  }
}
