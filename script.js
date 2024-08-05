document.getElementById('greeting-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const greetingText = `Dear ${name}, I’d spend forever learning all the little things about you, because every second with you is worth more than 10,000 hours. Your love is my favorite song, and I want to sing it for a lifetime.`;

    const greetingElement = document.getElementById('greeting');
    greetingElement.style.opacity = 0;

    setTimeout(() => {
        greetingElement.innerHTML = ''; // Clear any previous greeting
        greetingElement.style.opacity = 1;

        // Typewriter effect
        new Typewriter(greetingElement, {
            loop: false,
            delay: 75,
        }).typeString(greetingText).start();

        const playButton = document.createElement('button');
        playButton.id = 'play-music';
        playButton.innerText = '▷ 10.000 Hours ';
        playButton.addEventListener('click', () => {
            const music = document.getElementById('music');
            music.play();
            playButton.style.display = 'none';
            pauseButton.style.display = 'block';
        });

        const pauseButton = document.createElement('button');
        pauseButton.id = 'pause-music';
        pauseButton.innerText = 'Pause Music';
        pauseButton.addEventListener('click', () => {
            const music = document.getElementById('music');
            music.pause();
            playButton.style.display = 'block';
            pauseButton.style.display = 'none';
        });

        greetingElement.appendChild(playButton);
        greetingElement.appendChild(pauseButton);

        playButton.style.display = 'block';
        pauseButton.style.display = 'none';
    }, 100);
});
