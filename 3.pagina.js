document.addEventListener('DOMContentLoaded',()=>{
  const usdEl=document.getElementById('usdAmount');
  const rateEl=document.getElementById('exchangeRate');
  const btn=document.getElementById('convertBtn');
  const clear=document.getElementById('swapBtn');
  const result=document.getElementById('result');

  function formatBRL(value){
    return value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
  }

  btn.addEventListener('click',()=>{
    const usd=parseFloat(usdEl.value);
    const rate=parseFloat(rateEl.value);
    if(isNaN(usd) || isNaN(rate)){
      result.textContent='Preencha um valor e a cotação válidos.';return;
    }
    const brl=usd*rate;
    result.textContent=`${usd.toFixed(2)} USD × ${rate.toFixed(2)} = ${formatBRL(Number(brl.toFixed(2)))}`;
  });

  clear.addEventListener('click',()=>{
    usdEl.value=''; rateEl.value='5.10'; result.textContent='';
  });

  // quick convert on Enter
  [usdEl,rateEl].forEach(i=>i.addEventListener('keydown',e=>{if(e.key==='Enter')btn.click()}));
});
