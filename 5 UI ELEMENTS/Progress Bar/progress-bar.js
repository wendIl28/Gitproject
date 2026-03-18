const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const startBtn = document.getElementById('startBtn');

let progress = 0;

function updateProgress() {
    if (progress < 100) {
        progress += 1;
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `${progress}%`;
        setTimeout(updateProgress, 50);
    } else {
        progressText.textContent = 'Complete!';
    }
}

startBtn.addEventListener('click', () => {
    progress = 0;
    progressBar.style.width = '0%';
    progressText.textContent = '0%';
    updateProgress();
});