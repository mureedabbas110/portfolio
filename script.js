const nav=document.querySelector('.nav'),menu=document.querySelector('.menu-btn');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('[data-count]').forEach(el=>{
  let done=false;
  const ob=new IntersectionObserver(entries=>{
    if(entries[0].isIntersecting&&!done){
      done=true; const target=+el.dataset.count; let n=0; const step=Math.max(1,Math.ceil(target/18));
      const timer=setInterval(()=>{n=Math.min(target,n+step);el.textContent=n+(target===2?'':'+');if(n>=target)clearInterval(timer)},45);
    }
  },{threshold:.8}); ob.observe(el);
});
window.addEventListener('scroll',()=>{
  const h=document.documentElement, p=(h.scrollTop/(h.scrollHeight-h.clientHeight))*100;
  document.querySelector('.progress').style.width=p+'%';
});
