document.addEventListener('DOMContentLoaded', ()=>{
  const input = document.getElementById('cm');
  const btn = document.getElementById('convert');
  const clear = document.getElementById('clear');
  const result = document.getElementById('result');

  function showMessage(html, isError=false){
    result.className = 'result';
    if(isError) result.classList.add('error');
    result.innerHTML = html;
  }

  function convert(){
    const raw = input.value.trim();
    if(raw === ''){ showMessage('Por favor insira um valor em centímetros.', true); input.focus(); return; }
    const num = Number(raw);
    if(!isFinite(num)) { showMessage('Valor inválido. Insira um número válido.', true); input.focus(); return; }
    const meters = num/100;
    const formatted = meters.toLocaleString('pt-BR',{minimumFractionDigits:0,maximumFractionDigits:3});
    showMessage(`${num} cm = <strong>${formatted} m</strong>`);
  }

  btn.addEventListener('click', convert);
  input.addEventListener('keydown', (e)=>{ if(e.key === 'Enter') convert(); });
  clear.addEventListener('click', ()=>{ input.value=''; result.textContent=''; input.focus(); });
});
