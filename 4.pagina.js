document.addEventListener('DOMContentLoaded',()=>{
  const minutesEl=document.getElementById('minutes');
  const convertBtn=document.getElementById('convert');
  const resetBtn=document.getElementById('reset');
  const out=document.getElementById('out');

  convertBtn.addEventListener('click',()=>{
    const m=parseFloat(minutesEl.value);
    if(isNaN(m)){
      out.textContent='Digite um número de minutos válido.';return;
    }
    const seconds=m*60;
    const isInteger = Number.isInteger(seconds);
    out.textContent = `${m} minuto(s) = ${isInteger ? seconds : seconds.toFixed(2)} segundo(s)`;
  });

  resetBtn.addEventListener('click',()=>{minutesEl.value=''; out.textContent='';});

  minutesEl.addEventListener('keydown',e=>{if(e.key==='Enter')convertBtn.click()});
});
