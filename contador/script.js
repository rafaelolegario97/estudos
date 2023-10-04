let result = document.querySelector('.contador');
let valorContador = 0;

contadorElemento = 0;

function clickMenos(){
    if(valorContador >= 0){
    result.innerHTML = valorContador--;
    }else{
        alert("O numero nao pode ser negativo")
    }
}

function clickMais(){
    result.innerHTML = valorContador++;
 }