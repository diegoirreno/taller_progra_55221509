
function esEnteroPositivo(numero) {
    var numA = parseFloat(document.getElementById("numeroA").value);
    var numB = parseFloat(document.getElementById("numeroB").value);
     var resultado = document.getElementById("resultado");
}



function verificarDivisibilidad() {
   
   
    if (!esEnteroPositivo(numA) || !esEnteroPositivo(numB)) {
        alert("Por favor, ingrese dos números enteros positivos.");
        return false;
    }else{
       
        if (numA % numB == 0) {
            resultado.innerHTML = "El " + numA + " es divisible entre " + numB;
        } else {
            resultado.innerHTML = "El " + numA + " no es divisible entre " + numB;
        }
        return false;
    }

   
}