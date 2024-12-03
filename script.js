function createStars() {
    const container = document.getElementById('falling-stars');
    for (let i = 0; i < 30; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;
      const size = Math.random() * 10 + 10;
      star.style.left = `${startX}px`;
      star.style.top = `${startY}px`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.animationDuration = `${Math.random() * 1 + 1}s`;
      star.style.animationDelay = `${Math.random()}s`;
      container.appendChild(star);

      // Удаляем звезду после анимации
      star.addEventListener('animationend', () => star.remove());
    }
  }