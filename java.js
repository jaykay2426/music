// Function to create and animate bubbles
function createBubble(x, y) {
    const aboutSection = document.querySelector('.about');
    const bubble = document.createElement('div');
    bubble.classList.add('bubble', `bubble${Math.floor(Math.random() * 3) + 1}`); // Randomly assign bubble class
    aboutSection.appendChild(bubble);

    // Set the initial position of the bubble
    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;

    // Remove bubble after animation
    setTimeout(() => {
        bubble.remove();
    }, 3000); // Change this value to control how long the bubble stays
}

// Mouse movement on about section
document.addEventListener("mousemove", function (e) {
    const aboutSection = document.querySelector('.about');
    const rect = aboutSection.getBoundingClientRect();
    
    const x = e.clientX - rect.left; // X position within the element
    const y = e.clientY - rect.top; // Y position within the element

    // Create a bubble at the mouse position
    createBubble(e.clientX, e.clientY);
});

// Touch event for mobile devices
const aboutSection = document.querySelector('.about');
aboutSection.addEventListener("touchstart", function (e) {
    e.preventDefault(); // Prevent default touch behavior
    const touches = e.touches; // Get touch points

    // Create bubbles at each touch point
    for (let i = 0; i < touches.length; i++) {
        const touch = touches[i];
        createBubble(touch.clientX, touch.clientY); // Create bubble at touch position
    }
});

// Create initial bubble elements for the section
for (let i = 0; i < 20; i++) { // Increase the number of bubbles for a fuller effect
    const bubble = document.createElement('div');
    bubble.classList.add('bubble', `bubble${(i % 3) + 1}`); // Assign class for styling
    aboutSection.appendChild(bubble);
}
