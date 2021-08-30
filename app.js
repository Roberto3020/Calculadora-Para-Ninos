function suma() {
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var resultado = parseInt(numero1) + parseInt(numero2);
    document.getElementById("resultado").value = resultado;
}

function resta() {
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var resultado = numero1 - numero2;
    document.getElementById("resultado").value = resultado;
}

function multiplicacion() {
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var resultado = numero1 * numero2;
    document.getElementById("resultado").value = resultado;
}

function division() {
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var resultado = numero1 / numero2;
    document.getElementById("resultado").value = resultado;
}