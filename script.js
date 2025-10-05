const noButton = document.getElementById('no-btn');
const yesButton = document.getElementById('yes-btn');
const mainContent = document.getElementById('main-content');
const successMessage = document.getElementById('success-message');
const muteButton = document.getElementById('mute-btn'); 
const song = document.getElementById('bhabhi_song');    

// --- Mute/Unmute Logic ---
muteButton.addEventListener('click', () => {
    if (song.muted) {
        // Agar gaana mute hai toh unmute karke chalao
        song.muted = false;
        muteButton.innerHTML = '🔊'; 
        if (song.paused) {
            song.play();
        }
    } else {
        // Agar gaana chal raha hai toh mute karo
        song.muted = true;
        muteButton.innerHTML = '🔇'; 
    }
});

// --- Moving Button Logic ---
noButton.addEventListener('mouseover', () => {
    const buttonWidth = noButton.clientWidth;
    const buttonHeight = noButton.clientHeight;
    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;
    const margin = 50; 
    
    // Generate random positions 
    const randomX = Math.random() * (maxX - margin * 2) + margin;
    const randomY = Math.random() * (maxY - margin * 2) + margin;
    
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
});

// --- Yes Button Click Logic (SUCCESS!) ---
yesButton.addEventListener('click', () => {
    // 1. Hide the question and show the success message
    mainContent.style.display = 'none';
    successMessage.style.display = 'block';
    
    // 2. Play the song automatically and set to Unmute
    song.muted = false;
    song.play().catch(error => {
        // Fallback for strict browsers
        console.log("Audio playback was blocked. User might need to click the unmute button.", error);
    });
    muteButton.innerHTML = '🔊'; // Update button icon

    // 3. Remove the moving logic and mute button (Cleanup)
    noButton.removeEventListener('mouseover', () => {});
    muteButton.style.display = 'none'; 
    
    // 4. Clean up the page
    document.body.style.justifyContent = 'center'; 
    document.body.style.alignItems = 'center';
});

// Set initial position of the 'No' button
noButton.style.left = '70%';
noButton.style.top = '70%';
