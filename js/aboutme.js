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

function showCertificate(id) {
    const btn = event.target.closest('.show-btn');
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        btn.style.transform = '';
    }, 150);
    
    if (id === 1) {
      const link = window.location.href = "https://www.codepolitan.com/c/86Q2D4N/";
        link.target = "_blank";
    } else if (id === 2) {
       const link1 = window.location.href = "https://www.codepolitan.com/c/LNGMU1D/";
    }
}

const achievementObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.achievement-card').forEach(card => {
    achievementObserver.observe(card);
});

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressFills = entry.target.querySelectorAll('.progress-fill');
            progressFills.forEach(fill => {
                fill.style.width = fill.style.width;
            });
        }
    });
}, {
    threshold: 0.3,
    rootMargin: '0px'
});

const skillsSection = document.querySelector('.skills-grid');
if (skillsSection) {
    skillsObserver.observe(skillsSection);
}
