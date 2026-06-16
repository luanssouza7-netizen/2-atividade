document.addEventListener('DOMContentLoaded', ()=>{
    const input = document.getElementById('kelvinInput');
    const btn = document.getElementById('convertBtn');
    const out = document.getElementById('result');
    const copyBtn = document.getElementById('copyBtn');

    function formatCelsius(c){
        return `${c.toFixed(2)} °C`;
    }

    function showResult(text, isError = false){
        out.textContent = text;
        out.classList.toggle('error', isError);
    }

    function kelvinToCelsius(k){
        return k - 273.15;
    }

    function convert(){
        let val = input.value.trim();
        if(!val){ showResult('Por favor insira um valor em kelvin.', true); return; }
        // aceitar vírgula como decimal
        val = val.replace(',', '.');
        const k = Number(val);
        if(Number.isNaN(k)){
            showResult('Valor inválido. Use apenas números.', true);
            return;
        }
        const c = kelvinToCelsius(k);
        showResult(formatCelsius(c));
    }

    btn.addEventListener('click', convert);
    input.addEventListener('keydown', (e)=>{ if(e.key === 'Enter') convert(); });

    if(copyBtn){
        copyBtn.addEventListener('click', ()=>{
            const text = out.textContent || '';
            if(!text) return;
            navigator.clipboard?.writeText(text).then(()=>{
                copyBtn.textContent = 'Copiado!';
                setTimeout(()=> copyBtn.textContent = 'Copiar', 1400);
            }).catch(()=>{
                copyBtn.textContent = 'Falha';
                setTimeout(()=> copyBtn.textContent = 'Copiar', 1400);
            });
        });
    }
});
