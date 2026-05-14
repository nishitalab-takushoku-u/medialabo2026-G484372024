let b = document.querySelector('button#print');
b.addEventListener('click', greeting);

function greeting() {
    console.log('こんにちは');
    let i = document.querySelector('input[name="shimei"]');
    let shimei = i.value;
    let aisatu = 'こんにちは、' + shimei + 'さん';
    let p = document.querySelector('p#message');
    p.textContent = aisatu;
}