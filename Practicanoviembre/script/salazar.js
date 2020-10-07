let flag = 1;
document.getElementById('talento').style.display = "none";

function talento() {
    if (flag) {
        document.getElementById('talento').style.display = "block";
        let fecha = new Date();
        a = document.getElementById('talento').value = fecha;
        flag = 0;

    } else {

        a = document.getElementById('talento').value = "";
        flag = 1;
        document.getElementById('talento').style.display = "none";
    }
}

let galerias1 = document.getElementById("carouselExampleControls").innerHTML;
let imagenes = document.getElementById("imagen").innerHTML;
document.getElementById("carouselExampleControls").innerHTML = " ";

cambio = 1;

function galeria() {

    if (cambio) {

        document.getElementById("imagen").innerHTML = "";
        document.getElementById("carouselExampleControls").innerHTML = galerias1;

        cambio = 0;
    } else {

        document.getElementById("imagen").innerHTML = imagenes;
        document.getElementById("carouselExampleControls").innerHTML = "";
        cambio = 1;
    }

}

valor = 0;

function lectura() {
    let cambio = document.getElementById('lecturaCompletada');
    let texto = "lectura Completada";
    if (valor) {
        cambio.innerHTML = texto;
        valor = 0;
    } else {
        cambio.innerHTML = " lectura de 3 min";
        valor = 1;
    }
}

function lectura1() {
    let cambio = document.getElementById('lecturaCompletada1');
    let texto = "lectura Completada";
    if (valor) {
        cambio.innerHTML = texto;
        valor = 0;
    } else {
        cambio.innerHTML = " lectura de 3 min";
        valor = 1;
    }
}

function lectura2() {
    let cambio = document.getElementById('lecturaCompletada2');
    let texto = "lectura Completada";
    if (valor) {
        cambio.innerHTML = texto;
        valor = 0;
    } else {
        cambio.innerHTML = " lectura de 3 min";
        valor = 1;
    }
}

function lectura3() {
    let cambio = document.getElementById('lecturaCompletada3');
    let texto = "lectura Completada";
    if (valor) {
        cambio.innerHTML = texto;
        valor = 0;
    } else {
        cambio.innerHTML = " lectura de 3 min";
        valor = 1;
    }
}