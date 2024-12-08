const starsContainer = document.querySelector('.stars');
const numStars = 100;

for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    
    const x = Math.random() * 100; // % позиции по ширине
    const y = Math.random() * 100; // % позиции по высоте
    const size = Math.random() * 3 + 1; // Размер звезды
    
    star.style.left = `${x}%`;
    star.style.top = `${y}%`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.animationDelay = `${Math.random() * 3}s`; // Случайное время задержки
    
    starsContainer.appendChild(star);
}
