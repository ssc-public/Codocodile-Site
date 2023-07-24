// JavaScript code to create the repeating "Coming Soon" text in the background
window.addEventListener('DOMContentLoaded', () => {
    const backgroundPattern = document.createElement('div');
    backgroundPattern.classList.add('background-pattern');
    document.body.appendChild(backgroundPattern);

    const patternText = 'COMING SOON ';
    const patternCount = 5000; // Adjust the number of repetitions
    let repeatedText = '';

    // Function to generate a random character
    function getRandomChar() {
        const characters = 'codocodile';
        return characters.charAt(Math.floor(Math.random() * characters.length));
    }

    for (let i = 0; i < patternCount; i++) {
        let patternLine = patternText.split('').map(char => {
            // Randomly replace some characters with a different one
            if (Math.random() < 0.03) {
                return getRandomChar();
            }
            return char;
        }).join('');
        repeatedText += patternLine;
    }

    backgroundPattern.textContent = repeatedText;
});
