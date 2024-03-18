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
    let segundos = tiempo % 60;
    let minutos = Math.floor(tiempo / 60);
    let horas = Math.floor(minutos / 60);
    minutos %= 60;
    horas %= 60;

    segundos = segundos < 10 ? "0" + segundos : segundos;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    horas = horas < 10 ? "0" + horas : horas;

    cronometro.textContent = horas + ":" + minutos + ":" + segundos;
}

document.addEventListener("DOMContentLoaded", function() {
    cronometro = document.getElementById("cronometro");
});
