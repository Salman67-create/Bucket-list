// Update footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle functionality
const themeToggle = document.querySelector('.theme-toggle');
const root = document.documentElement;
let isDarkMode = false;

themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        root.style.setProperty('--background-color', '#1a1a1a');
        root.style.setProperty('--text-color', '#ffffff');
        root.style.setProperty('--card-background', '#2d2d2d');
        root.style.setProperty('--shadow-color', 'rgba(0, 0, 0, 0.3)');
        themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    } else {
        root.style.setProperty('--background-color', '#f5f6fa');
        root.style.setProperty('--text-color', '#2c3e50');
        root.style.setProperty('--card-background', '#ffffff');
        root.style.setProperty('--shadow-color', 'rgba(0, 0, 0, 0.1)');
        themeToggle.querySelector('i').classList.replace('fa-sun', 'fa-moon');
    }
});

// Toggle completion status
document.querySelectorAll('.bucket-list li').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('completed');
    });
});
