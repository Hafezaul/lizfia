  // Loading program    
  window.addEventListener('load', function() {
    // Simulasi loading selama 3 detik
    setTimeout(function() {
        const loadingScreen = document.getElementById('loadingScreen');
        const mainContent = document.getElementById('mainContent');
        
        // Sembunyikan loading screen
        loadingScreen.classList.add('hide');
        
        // Tampilkan konten utama
        mainContent.style.display = 'block';
        
        // Hapus loading screen setelah transisi selesai
        setTimeout(function() {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000); // 2000 ms = 2 detik
});

const words = ['Developer', 'Designer', 'Talib'];
const dynamicTextElement = document.getElementById('dynamic-text');
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWord() {
    const currentWord = words[wordIndex];
    
    if (!isDeleting) {
        // Mengetik
        dynamicTextElement.innerHTML = currentWord.substring(0, charIndex + 1) + 
            '<span class="cursor">|</span>';
        charIndex++;

        // Jika sudah selesai mengetik, mulai menghapus
        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeWord, 2000); // Tunggu sebelum mulai menghapus
        } else {
            setTimeout(typeWord, 300); // Kecepatan mengetik
        }
    } else {
        // Menghapus
        dynamicTextElement.innerHTML = currentWord.substring(0, charIndex - 1) + 
            '<span class="cursor">|</span>';
        charIndex--;

        // Jika sudah selesai menghapus, pindah ke kata berikutnya
        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeWord, 500); // Tunggu sebelum memulai kata baru
        } else {
            setTimeout(typeWord, 100); // Kecepatan menghapus
        }
    }
}

// Memulai efek mengetik
typeWord();