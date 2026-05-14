let b = document.querySelector('button#calc'); 
b.addEventListener('click', kazu); 

function kazu() {
    let i = document.querySelector('input[name="left"]');
    let k = document.querySelector('input[name="right"]');
    let n = Number(i.value);
    let m = Number(k.value);

    let c = document.querySelector('span[id="answer"]');
    c.textContent = n + m;
}