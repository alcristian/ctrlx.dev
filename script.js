document.addEventListener('DOMContentLoaded', () => {
    const terminal = document.getElementById('terminal');
    const messages = [
        '> SYSTEM BOOT SEQUENCE INITIATED...',
        '> LOADING NEUROMANCER PROTOCOL v2.3.1...',
        '> ESTABLISHING CONNECTION TO MATRIX...',
        '> CONNECTING TO CYBERSPACE NETWORK...',
        '> DECRYPTING MAINFRAME...',
        '> BYPASSING SECURITY PROTOCOLS...',
        '> ACCESS GRANTED',
        '> WELCOME TO THE GRID, USER',
        '> INITIATING REDIRECT SEQUENCE...',
        '> PREPARE FOR TRANSITION',
        '> 3... 2... 1...'
    ];

    let currentMessage = 0;
    let currentChar = 0;
    let isDeleting = false;
    let typingSpeed = 50;
    let deleteSpeed = 30;
    let pauseBetweenMessages = 1000;
    let pauseAtEnd = 2000;

    function typeWriter() {
        const currentText = messages[currentMessage];
        
        if (isDeleting) {
            // Delete characters
            currentChar--;
            if (currentChar <= 0) {
                isDeleting = false;
                currentMessage = (currentMessage + 1) % messages.length;
                setTimeout(typeWriter, pauseBetweenMessages / 2);
                return;
            }
        } else {
            // Type characters
            currentChar++;
            if (currentChar > currentText.length) {
                if (currentMessage === messages.length - 1) {
                    // Last message - redirect after pause
                    setTimeout(() => {
                        window.location.href = 'https://ctrlx.dev';
                    }, pauseAtEnd);
                    return;
                }
                isDeleting = true;
                setTimeout(typeWriter, pauseBetweenMessages);
                return;
            }
        }

        // Display the current text
        const typedText = currentText.substring(0, currentChar);
        const cursor = '<span class="blink">_</span>';
        
        // Create glitch effect for some messages
        if (Math.random() > 0.7 && currentChar > 5) {
            terminal.innerHTML = `${typedText}${cursor}<br>${terminal.innerHTML}`;
        } else {
            terminal.innerHTML = `${typedText}${cursor}<br>${terminal.innerHTML}`;
        }

        // Set typing speed
        const speed = isDeleting ? deleteSpeed : typingSpeed;
        // Add some randomness to make it feel more "hacker-like"
        const randomSpeed = Math.random() * 100 > 95 ? speed * 3 : speed;
        
        setTimeout(typeWriter, randomSpeed);
    }

    // Start the typing effect after a short delay
    setTimeout(typeWriter, 1000);

    // Add some random glitch effects
    setInterval(() => {
        if (Math.random() > 0.9) {
            const randomGlitch = document.createElement('div');
            randomGlitch.className = 'glitch';
            randomGlitch.textContent = '> ' + generateRandomHex(16);
            randomGlitch.style.opacity = '0.7';
            randomGlitch.style.position = 'absolute';
            randomGlitch.style.left = Math.random() * 90 + '%';
            randomGlitch.style.top = Math.random() * 90 + '%';
            randomGlitch.style.zIndex = '10';
            document.body.appendChild(randomGlitch);
            
            setTimeout(() => {
                randomGlitch.remove();
            }, 100);
        }
    }, 100);

    // Generate random hex string
    function generateRandomHex(length) {
        const chars = '0123456789ABCDEF';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }
});
