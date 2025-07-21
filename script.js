function showLove() {
  document.getElementById('secret').classList.remove('hidden');
}

document.getElementById('messageForm').onsubmit = function(e) {
  e.preventDefault();
  alert('Pesanmu sudah terkirim ke hatiku 💘');
};

// Animasi bintang jatuh
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = Array(100).fill().map(() => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 1.5,
  d: Math.random() * 5
}));

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#fff';
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
