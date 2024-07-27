// script.js

document.addEventListener('DOMContentLoaded', () => {
    const videoHero = document.querySelector('.video-hero');
    let isDragging = false;
    let offsetX, offsetY;

    // Handle dragging
    videoHero.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - videoHero.getBoundingClientRect().left;
        offsetY = e.clientY - videoHero.getBoundingClientRect().top;
        videoHero.style.transition = 'none'; // Disable transition during drag
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            videoHero.style.left = `${e.clientX - offsetX}px`;
            videoHero.style.top = `${e.clientY - offsetY}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        videoHero.style.transition = 'top 0.2s ease, left 0.2s ease'; // Re-enable transition
    });

    // Handle touch events for mobile devices
    videoHero.addEventListener('touchstart', (e) => {
        isDragging = true;
        const touch = e.touches[0];
        offsetX = touch.clientX - videoHero.getBoundingClientRect().left;
        offsetY = touch.clientY - videoHero.getBoundingClientRect().top;
        videoHero.style.transition = 'none'; // Disable transition during drag
    });

    document.addEventListener('touchmove', (e) => {
        if (isDragging) {
            const touch = e.touches[0];
            videoHero.style.left = `${touch.clientX - offsetX}px`;
            videoHero.style.top = `${touch.clientY - offsetY}px`;
        }
    });

    document.addEventListener('touchend', () => {
        isDragging = false;
        videoHero.style.transition = 'top 0.2s ease, left 0.2s ease'; // Re-enable transition
    });

    // Handle hiding
    const hideButton = document.createElement('button');
    hideButton.className = 'hide-button';
    hideButton.innerText = 'Hide';
    document.body.appendChild(hideButton);

    hideButton.addEventListener('click', () => {
        if (videoHero.style.display === 'none') {
            videoHero.style.display = 'block';
            hideButton.innerText = 'Hide';
        } else {
            videoHero.style.display = 'none';
            hideButton.innerText = 'Show';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.carousel-slides');
    const slideCount = document.querySelectorAll('.carousel-slide').length;
    let currentIndex = 0;

    document.querySelector('.prev').addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slideCount - 1;
        }
        updateCarousel();
    });

    document.querySelector('.next').addEventListener('click', () => {
        if (currentIndex < slideCount - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    });

    function updateCarousel() {
        const offset = -currentIndex * 100;
        slides.style.transform = `translateX(${offset}%)`;
    }
    
});

document.addEventListener('DOMContentLoaded', () => {
    const videoHero = document.querySelector('.video-hero');
    const resizeHandle = document.querySelector('.resize-handle');
    let isResizing = false;
    let initialWidth, initialHeight, initialX, initialY;

    // Handle resizing
    resizeHandle.addEventListener('mousedown', (e) => {
        e.preventDefault();
        isResizing = true;
        initialWidth = videoHero.offsetWidth;
        initialHeight = videoHero.offsetHeight;
        initialX = e.clientX;
        initialY = e.clientY;

        document.addEventListener('mousemove', resize);
        document.addEventListener('mouseup', stopResize);
    });

    function resize(e) {
        if (isResizing) {
            const dx = e.clientX - initialX;
            const dy = e.clientY - initialY;
            videoHero.style.width = `${initialWidth + dx}px`;
            videoHero.style.height = `${initialHeight + dy}px`;
        }
    }

    function stopResize() {
        isResizing = false;
        document.removeEventListener('mousemove', resize);
        document.removeEventListener('mouseup', stopResize);
    }

    // Handle dragging for repositioning
    let isDragging = false;
    let offsetX, offsetY;

    videoHero.addEventListener('mousedown', (e) => {
        if (e.target === resizeHandle) return; // Prevent dragging if resizing
        isDragging = true;
        offsetX = e.clientX - videoHero.getBoundingClientRect().left;
        offsetY = e.clientY - videoHero.getBoundingClientRect().top;
        videoHero.style.transition = 'none'; // Disable transition during drag
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            videoHero.style.left = `${e.clientX - offsetX}px`;
            videoHero.style.top = `${e.clientY - offsetY}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        videoHero.style.transition = 'top 0.2s ease, left 0.2s ease, width 0.2s ease, height 0.2s ease'; // Re-enable transition
    });

    // Handle touch events for mobile devices
    videoHero.addEventListener('touchstart', (e) => {
        if (e.target === resizeHandle) return; // Prevent dragging if resizing
        isDragging = true;
        const touch = e.touches[0];
        offsetX = touch.clientX - videoHero.getBoundingClientRect().left;
        offsetY = touch.clientY - videoHero.getBoundingClientRect().top;
        videoHero.style.transition = 'none'; // Disable transition during drag
    });

    document.addEventListener('touchmove', (e) => {
        if (isDragging) {
            const touch = e.touches[0];
            videoHero.style.left = `${touch.clientX - offsetX}px`;
            videoHero.style.top = `${touch.clientY - offsetY}px`;
        }
    });

    document.addEventListener('touchend', () => {
        isDragging = false;
        videoHero.style.transition = 'top 0.2s ease, left 0.2s ease, width 0.2s ease, height 0.2s ease'; // Re-enable transition
    });

    // Handle hiding
    document.addEventListener('keydown', (e) => {
        if (e.key === 'h') {
            if (videoHero.style.display === 'none') {
                videoHero.style.display = 'block';
            } else {
                videoHero.style.display = 'none';
            }
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const overviewElement = document.getElementById('intro');
    overviewElement.classList.add('bounce-animation');
});

