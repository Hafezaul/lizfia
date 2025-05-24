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

// Add hover effect for links and buttons
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
// certification 

function showCertificate(id) {
    // Animate button
    const btn = event.target.closest('.show-btn');
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        btn.style.transform = '';
    }, 150);
    
    // Your certificate display logic here
    if (id === 1) {
      const link = window.location.href = "https://www.codepolitan.com/c/86Q2D4N/";
        link.target = "_blank";
    } else if (id === 2) {
       const link1 = window.location.href = "https://www.codepolitan.com/c/LNGMU1D/";
    }
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

document.querySelectorAll('.achievement-card').forEach(card => {
    observer.observe(card);
});