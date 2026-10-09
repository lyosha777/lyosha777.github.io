/* Progressive enhancement only; original site works without JavaScript. */
(()=>{'use strict';if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
const targets=[...document.querySelectorAll('.section-intro,.project.post,.approach-section,.contact-section,.systems-sketch')];
if(!('IntersectionObserver' in window))return;
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');observer.unobserve(e.target)}})},{rootMargin:'0px 0px -35px 0px',threshold:.06});
targets.forEach(el=>el.classList.add('reveal-on-scroll'));
document.documentElement.classList.add('motion-ready');
requestAnimationFrame(()=>targets.forEach(el=>{if(el.getBoundingClientRect().top<window.innerHeight*.85)el.classList.add('is-visible');else observer.observe(el)}));
})();
