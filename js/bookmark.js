// Initialize AOS
AOS.init({
    duration: 800,
    once: false
});

// Custom cursor
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

// Load bookmarks from JSON
async function loadBookmarks() {
    try {
        const response = await fetch('../data/bookmark.json');
        const data = await response.json();
        const container = document.getElementById('bookmarks-container');
        
        data.bookmarks.forEach((bookmark, index) => {
            const delay = (index % 3) * 100 + 100;
            const card = `
                <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="${delay}">
                    <div class="bookmark-card">
                        <div class="card-body">
                            <div class="bookmark-icon-wrapper">
                                <i class="fas ${bookmark.icon}"></i>
                            </div>
                            <span class="bookmark-category">${bookmark.category}</span>
                            <h3>${bookmark.title}</h3>
                            <p>${bookmark.description}</p>
                            <a href="${bookmark.url}" class="bookmark-link" target="_blank">
                                View More <i class="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += card;
        });
        
        // Refresh AOS after adding content
        AOS.refresh();
        
        // Add hover effect for interactive elements
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
    } catch (error) {
        console.error('Error loading bookmarks:', error);
    }
}

// Load bookmarks when page loads
loadBookmarks();
