const nav=document.getElementById('navbar');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>20));
const hamburger=document.getElementById('hamburger');
const navLinks=document.getElementById('navLinks');
hamburger.addEventListener('click',()=>navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');e.target.querySelectorAll('.service-card,.why-card,.testi-card').forEach((c,i)=>{c.style.transitionDelay=(i*.1)+'s';c.classList.add('visible');});}}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
function handleSubmit(e) { e.preventDefault(); const n = document.getElementById('name').value; if (!n) { alert('Please enter your name.'); return; } const t = document.getElementById('toast'); t.style.transform = 'translateY(0)'; t.style.opacity = '1'; setTimeout(() => { t.style.transform = 'translateY(100px)'; t.style.opacity = '0'; }, 3500);['name', 'phone', 'email', 'service', 'message'].forEach(id => document.getElementById(id).value = ''); }
function handleSubmit(e) {
  e.preventDefault();
  alert("Thank you! Our team will contact you within 2 hours.");
}