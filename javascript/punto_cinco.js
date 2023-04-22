function identificarNumero() {
    var numero = parseFloat(document.getElementById("numero").value);
    var resultado = document.getElementById("resultado");

    if (numero >= 0 && Number.isInteger(numero)) {
        let opera = numero % 2;
        if(opera == 0){
            resultado.textContent = "Su número es par";
        }else{
            resultado.textContent = "Su número es impar"; 
        }
    }else if(numero < 0 && !Number.isInteger(numero)){
        resultado.textContent = "Debe ingresar números enteros positivos."
    } else if (isNaN(numero)) {
        resultado.textContent = "Debe ingresar al menos un número entero positivo.";
    }else if (numero < 0) {
        resultado.textContent = "Debe ingresar un número entero positivo.";
    } else{
        resultado.textContent = "Debe ingresar un numero entero.";   
    }
}
