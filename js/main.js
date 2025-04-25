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

 // Typing animation
 const typedTextElement = document.querySelector('.typed-text');
 const textToType = "someone who will be successful in the world of software engineering";
 let charIndex = 0;

 function typeText() {
     if (charIndex < textToType.length) {
         typedTextElement.textContent = textToType.substring(0, charIndex + 1);
         charIndex++;
         setTimeout(typeText, 100);
     } else {
         // After typing completes, start blinking effect for the cursor
         typedTextElement.classList.add('typing-done');
     }
 }

 // Start typing animation after a short delay
 setTimeout(typeText, 1500);

 // Custom Alert
 const alertOverlay = document.querySelector('.alert-overlay');
 const customAlert = document.querySelector('.custom-alert');
 const alertButton = document.querySelector('.alert-button');

 // Show alert after page loads
 window.addEventListener('load', () => {
     setTimeout(() => {
         alertOverlay.classList.add('show');
         customAlert.classList.add('show');
     }, 1000);
 });

 // Close alert when button is clicked
 alertButton.addEventListener('click', () => {
     alertOverlay.classList.remove('show');
     customAlert.classList.remove('show');
 });

 // Close alert when overlay is clicked
 alertOverlay.addEventListener('click', () => {
     alertOverlay.classList.remove('show');
     customAlert.classList.remove('show');
 });