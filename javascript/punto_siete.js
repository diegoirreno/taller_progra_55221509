
function esEnteroPositivo(numero) {
    return Number.isInteger(numero) && numero > 0;
}
function verificarDivisibilidad() {
    var numeroA = parseInt(document.getElementById("numeroA").value);
    var numeroB = parseInt(document.getElementById("numeroB").value);

    if (!esEnteroPositivo(numeroA) || !esEnteroPositivo(numeroB)) {
        alert("Por favor, ingrese dos números enteros positivos.");
        return false;
    }

    var resultado = document.getElementById("resultado");
    if (numeroA % numeroB == 0) {
        resultado.innerHTML = "El número " + numeroA + " es divisible entre el número " + numeroB;
    } else {
        resultado.innerHTML = "El número " + numeroA + " no es divisible entre el número " + numeroB;
    }

    return false;
}