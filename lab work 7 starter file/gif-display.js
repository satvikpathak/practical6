class GifDisplay {
  constructor(theme) {
      this.theme = theme;
      this.gifContainer = document.getElementById('gif-display');
      this.gifs = [];
  }

  async preloadGifs() {
      // Fetch gifs based on the theme
      const giphyApiKey = 'YOUR_GIPHY_API_KEY'; // Replace with your Giphy API key
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${this.theme}&limit=10`);
      const data = await response.json();
      this.gifs = data.data.map(gif => gif.images.original.url);
  }

  setInitialGifs() {
      this.showNextGif();
  }

  setupGifDisplay() {
      this.gifContainer.innerHTML = '';
  }

  showNextGif() {
      const randomIndex = Math.floor(Math.random() * this.gifs.length);
      const gifUrl = this.gifs[randomIndex];

      const img = document.createElement('img');
      img.src = gifUrl;
      img.alt = 'GIF';
      img.className = 'gif';
      this.gifContainer.innerHTML = ''; // Clear previous gifs
      this.gifContainer.appendChild(img);
  }
}
