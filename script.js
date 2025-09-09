// Typing effect
const text = 'Chic Up. Shine Bright. Be a Star.';
let i = 0;
const typingElement = document.getElementById('typing');

function type() {
  if (i < text.length) {
    typingElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}
type();

// Scroll animation
const scrollElements = document.querySelectorAll('.animate-on-scroll');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('active');
  });
}, {threshold:0.1});
scrollElements.forEach(el => observer.observe(el));

// Particle effect in hero section
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
for(let i=0;i<100;i++){
  particles.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    r: Math.random()*3+1,
    dx: (Math.random()-0.5)*0.5,
    dy: (Math.random()-0.5)*0.5
  });
}

function animateParticles(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2,false);
    ctx.fillStyle='rgba(255,255,255,0.7)';
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    if(p.x<0 || p.x>canvas.width) p.dx*=-1;
    if(p.y<0 || p.y>canvas.height) p.dy*=-1;
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

window.addEventListener('resize', ()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});