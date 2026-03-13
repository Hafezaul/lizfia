class navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <link rel="stylesheet" href="../css/navbar.css">
     <nav class="modern-navbar">
        <div class="nav-container">
            <a href="/" class="nav-logo">
                <span class="logo-text">lizfia</span>
            </a>
            
            <ul class="nav-menu">
                <li class="nav-item">
                    <a href="/" class="nav-link">
                        <i class="fas fa-home"></i>
                        <span>Home</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="/pages/aboutme.html" class="nav-link">
                        <i class="fas fa-user"></i>
                        <span>About</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="/pages/projects.html" class="nav-link">
                        <i class="fas fa-folder"></i>
                        <span>Projects</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="/pages/bookmark.html" class="nav-link">
                        <i class="fas fa-bookmark"></i>
                        <span>Bookmark</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="https://linktr.ee/hafzz11" class="nav-link">
                        <i class="fas fa-envelope"></i>
                        <span>Contact</span>
                    </a>
                </li>
            </ul>

            <button class="mobile-toggle" id="mobileToggle">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>
    `;
  }
}
customElements.define('navbar-lizfia', navbar );

const cursor = document.querySelector('.cursor');
const cursorShadow = document.querySelector('.cursor-shadow');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    cursorShadow.style.left = e.clientX + 'px';
    cursorShadow.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
    cursorShadow.style.transform = 'translate(-50%, -50%) scale(1.2)';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    cursorShadow.style.transform = 'translate(-50%, -50%) scale(1)';
});

const interactiveElements = document.querySelectorAll('a, button');
interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorShadow.style.transform = 'translate(-50%, -50%) scale(2)';
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorShadow.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});

const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileToggle) {
    mobileToggle.addEventListener('click', (e) => {
        e.preventDefault();
        mobileToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (mobileToggle) {
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});
