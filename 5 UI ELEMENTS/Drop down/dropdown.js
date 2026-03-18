const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');

dropdownBtn.addEventListener('click', () => {
    dropdownContent.classList.toggle('show');
});


window.addEventListener('click', (e) => {
    if (!e.target.matches('.dropdown-btn')) {
        dropdownContent.classList.remove('show');
    }
});