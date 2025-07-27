const forgiveBtn = document.getElementById('forgiveBtn');

forgiveBtn.addEventListener('click', () => {
  forgiveBtn.style.animation = 'shake 0.5s';
  setTimeout(() => {
    forgiveBtn.style.animation = 'glow 2s infinite alternate';
  }, 500);
  alert("I love you more than anything. Please forgive me, baby! 💖");
});
