// script.js — interactivity for gift, confetti, and typewriter

document.addEventListener('DOMContentLoaded', () => {
  // Gift click on index.html
  const gift = document.getElementById('gift');
  const openBtn = document.getElementById('openBtn');

  if (gift) {
    gift.addEventListener('click', openGift);
    gift.addEventListener('keypress', (e) => { if (e.key === 'Enter') openGift(); });
  }
  if (openBtn) openBtn.addEventListener('click', openGift);

  function openGift(){
    // animation: add class, show confetti, then navigate
    gift.classList.add('open');
    burstConfetti();
    // slight delay so user can see opening
    setTimeout(() => {
      window.location.href = 'gifts.html';
    }, 900);
  }

  // Confetti (simple)
  function burstConfetti(){
    const colors = ['#ffd166','#06d6a0','#4cc9f0','#ef476f','#118ab2'];
    for(let i=0;i<30;i++){
      const c = document.createElement('div');
      c.className = 'confetti';
      c.style.position = 'fixed';
      c.style.left = (50 + (Math.random()*400-200))+'px';
      c.style.top = (50 + Math.random()*20)+'px';
      c.style.width = (8 + Math.random()*7)+'px';
      c.style.height = c.style.width;
      c.style.background = colors[Math.floor(Math.random()*colors.length)];
      c.style.opacity = '0.95';
      c.style.borderRadius = '2px';
      c.style.transform = `translateY(0) rotate(${Math.random()*360}deg)`;
      c.style.zIndex = 9999;
      c.style.transition = 'transform 1200ms cubic-bezier(.2,.9,.2,1), opacity 1400ms';
      document.body.appendChild(c);
      // fly
      setTimeout(() => {
        const dx = (Math.random()*600-300);
        const dy = (400 + Math.random()*200);
        c.style.transform = `translate(${dx}px, ${dy}px) rotate(${Math.random()*720}deg)`;
        c.style.opacity = '0';
      }, 20);
      setTimeout(()=> c.remove(), 1600);
    }
  }

  // Typewriter on letter page
  const typeEl = document.getElementById('typewriter');
  if (typeEl){
    const text = typeEl.getAttribute('data-text') || '';
    typeEl.textContent = '';
    let i = 0;
    function step(){
      if (i <= text.length){
        typeEl.textContent = text.slice(0,i);
        i++;
        setTimeout(step, 28 + Math.random()*18);
      }
    }
    // small delay then start
    setTimeout(step, 600);
  }
});
