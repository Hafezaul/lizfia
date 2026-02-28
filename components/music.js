class music extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<audio id="bg-music" src="../music.mp3" autoplay></audio>

<script>
  const audio = document.getElementById("bg-music");
  let hasPlayed = false;

  function startMusicOnScroll() {
    if (!hasPlayed) {
      audio.play()
        .then(() => {
          hasPlayed = true;
          console.log("Music started");
        })
        .catch(err => {
          console.log("Autoplay blocked:", err);
        });
    }
  }

  window.addEventListener("scroll", startMusicOnScroll);
</script>
    `;
  }
}
customElements.define('music-lizfia', music );