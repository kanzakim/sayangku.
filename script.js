function showLetter() {
  document.getElementById('letter').classList.remove('hidden');
}

// Bintang jatuh
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = Array(150).fill().map(() => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 1.2 + 0.3,
  d: Math.random() * 5
}));

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fill();
    star.y += 0.5;
    if (star.y > canvas.height) star.y = 0;
  });
  requestAnimationFrame(drawStars);
}

drawStars();
