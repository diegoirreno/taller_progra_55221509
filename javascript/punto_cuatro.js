function calculate() {

    var nomEs = document.getElementById("nombre").value;
    var asigna = document.getElementById("materia").value;
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);

    var prom = (nota1 + nota2 + nota3) / 3;

    var resultDiv = document.getElementById("resultado");
    if (prom >= 3.0) {
        resultDiv.innerHTML = "Felicitaciones " + nomEs + ", su nota es " + prom.toFixed(2) + ", pasaste " + asigna + ".";
        resultDiv.style.color = "green";
    } else {
        resultDiv.innerHTML = "Lo siento " + nomEs + ", su nota es " + prom.toFixed(2) + ", perdiste " + asigna + ".";
        resultDiv.style.color = "red";
    }
}