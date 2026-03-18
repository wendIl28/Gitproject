const openSheetBtn = document.getElementById('openSheetBtn');
const closeSheetBtn = document.getElementById('closeSheetBtn');
const sideSheet = document.getElementById('sideSheet');

openSheetBtn.addEventListener('click', () => {
    sideSheet.classList.add('open');
});

closeSheetBtn.addEventListener('click', () => {
    sideSheet.classList.remove('open');
});

// Close side sheet when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === sideSheet) {
        sideSheet.classList.remove('open');
    }
});