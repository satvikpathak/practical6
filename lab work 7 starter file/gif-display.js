class GifDisplay {
  constructor() {
    this.gifContainer = document.getElementById('gif-display'); // Get the display container
  }

  loadGif(url) {
    this.gifContainer.innerHTML = `<img src="${url}" alt="GIF" />`; // Load GIF
  }
}
