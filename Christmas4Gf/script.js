// Personalized name
document.getElementById('herName').textContent = 'Your Girlfriend\'s Name';

// Countdown to Christmas (local time)
(function setupCountdown() {
  const now = new Date();
  const year = now.getFullYear();
  const target = new Date(year, 11, 25, 0, 0, 0); // Dec 25
  // If today is after Christmas, count down to next year's Christmas
  if (now > target) target.setFullYear(year + 1);

  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  function update() {
    const diff = target - new Date();
    const s = Math.max(0, Math.floor(diff / 1000));
    const d = Math.floor(s / 86400);
    const h = Math.floor((s % 86400) / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;

    daysEl.textContent = String(d).padStart(2, '0');
    hoursEl.textContent = String(h).padStart(2, '0');
    minutesEl.textContent = String(m).padStart(2, '0');
    secondsEl.textContent = String(sec).padStart(2, '0');
  }
  update();
  setInterval(update, 1000);
})();

// Gift reveal
document.getElementById('unwrapBtn').addEventListener('click', () => {
  const box = document.getElementById('giftContent');
  box.classList.toggle('hidden');

  // Optional: a tiny confetti effect
  smallConfetti();
});

// Minimal confetti effect using emojis
function smallConfetti() {
  const emojis = ['❄️', '✨', '🎄', '💖'];
  for (let i = 0; i < 12; i++) {
    const span = document.createElement('span');
    span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    span.style.position = 'fixed';
    span.style.left = Math.random() * 100 + 'vw';
    span.style.top = '-10px';
    span.style.fontSize = (Math.random() * 20 + 12) + 'px';
    span.style.transition = 'transform 1.8s ease, opacity 1.8s ease';
    span.style.zIndex = 2;
    document.body.appendChild(span);
    requestAnimationFrame(() => {
      span.style.transform = `translateY(${Math.random() * 80 + 60}vh) rotate(${Math.random() * 120 - 60}deg)`;
      span.style.opacity = '0';
    });
    setTimeout(() => span.remove(), 2000);
  }
}

// Falling snow on canvas
(function snow() {
  const canvas = document.getElementById('snow');
  const ctx = canvas.getContext('2d');
  let w, h, flakes;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    flakes = Array.from({ length: Math.floor(w * h / 18000) }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 2 + 1,
      d: Math.random() * 1 + 0.5,
      drift: Math.random() * 0.6 - 0.3
    }));
  }
  window.addEventListener('resize', resize);
  resize();

  function draw() {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(255,255,255,0.9)';
    ctx.beginPath();
    for (const f of flakes) {
      ctx.moveTo(f.x, f.y);
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
    }
    ctx.fill();
    update();
    requestAnimationFrame(draw);
  }
  function update() {
    for (const f of flakes) {
      f.y += f.d;
      f.x += f.drift;
      if (f.y > h + 4) { f.y = -4; f.x = Math.random() * w; }
      if (f.x > w + 4) f.x = -4;
      if (f.x < -4) f.x = w + 4;
    }
  }
  draw();
})();
