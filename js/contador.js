let contador = 0;

let number = document.querySelector('#number-contador');
let incrementar = document.querySelector('#Incrementar');
let decrementar = document.querySelector('#Decrementar');
let reiniciar = document.querySelector('#Reiniciar');

incrementar.addEventListener('click',() => {
    contador++;
    number.innerHTML = contador;
    decrementar.disabled = false;
})

decrementar.addEventListener('click',() => {
    contador--;
    if(contador == 0){
        decrementar.disabled = true;
    }
    number.innerHTML = contador;
})

reiniciar.addEventListener('click',() => {
    contador = 0;
    number.innerHTML = contador;
})

