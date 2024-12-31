// Add JS here

 // script.js

// Wait for the page to fully load
window.addEventListener('load', () => {
    // Simulate loading time (e.g., 3 seconds)
    setTimeout(() => {
        // Hide the loading screen
        document.getElementById('loading-screen').style.display = 'none';
        
        // Show the main content
        document.getElementById('main-content').style.display = 'block';
    }, 3000); // Change 3000 to desired loading time in milliseconds
});

// Sound meme Alucard
const button = document.getElementById('button-music');
const icon = document.getElementById('icon-music');
const audio = document.getElementById('audio');

// Memastikan audio dimulai otomatis
window.onload = function() {
  if (audio.paused) {
    audio.play();
  }
};

// Fungsi untuk play/pause saat tombol ditekan
button.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause');
  } else {
    audio.pause();
    icon.classList.remove('fa-pause');
    icon.classList.add('fa-play');
  }
});