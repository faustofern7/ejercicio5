let cronometro;
let tiempo = 0;
let intervalo;

function iniciarCronometro() {
    if (!intervalo) {
        intervalo = setInterval(function() {
            tiempo++;
            actualizarCronometro();
        }, 1000);
    }
}

function pausarCronometro() {
    clearInterval(intervalo);
    intervalo = null;
}

function resetearCronometro() {
    clearInterval(intervalo);
    intervalo = null;
    tiempo = 0;
    actualizarCronometro();
}

function actualizarCronometro() {
    let ahora = new Date();
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();

    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    cronometro.textContent = horas + ":" + minutos + ":" + segundos;
}


document.addEventListener("DOMContentLoaded", function() {
    cronometro = document.getElementById("cronometro");
});
