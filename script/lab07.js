function nombre() {
    nom = document.getElementById('nombre').value;
    let cadena = nom;
    let arreglo = cadena.split(" ");
    if (arreglo[2]) {
        let nombre = (arreglo[0]);
        let paterno = (arreglo[1]);
        let materno = (arreglo[2]);
        document.getElementById('nombre1').value = nombre;
        document.getElementById('appaterno').value = paterno;
        document.getElementById('apmaterno').value = materno;
        let longitud = paterno.length + materno.length;
        document.getElementById('longitud').value = longitud;
    }
}

function nombre1() {
    nom = document.getElementById('nombre').value;
    let cadena = nom;
    let arreglo = cadena.split(" ");
    if (arreglo[3]) {
        let nombre = (arreglo[0] + " " + arreglo[1]);
        let paterno = (arreglo[2]);
        let materno = (arreglo[3]);
        document.getElementById('nombre1').value = nombre;
        document.getElementById('appaterno').value = paterno;
        document.getElementById('apmaterno').value = materno;
        let longitud = paterno.length + materno.length;
        document.getElementById('longitud').value = longitud;
    }
}

function calcular_edad() {
    /*edad*/
    let fecha = document.getElementById('fecha').value;
    let fecha_nacimiento = new Date(fecha);
    let fechaActual = new Date();
    let edad = parseInt(fechaActual.getFullYear() - fecha_nacimiento.getFullYear());
    document.getElementById('edad').value = edad;
    /*mes*/
    let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre']
    let mes = fecha_nacimiento.getMonth();
    mes = meses[mes];
    document.getElementById('mes').value = mes;

}
let flag = 1;

function cambio_color() {

    var x = document.querySelectorAll("input.a")
    var i;
    if (flag) {

        for (i = 0; i < x.length; i++) {
            x[i].style.backgroundColor = "red";
        }
        flag = 0;
    } else {

        for (i = 0; i < x.length; i++) {
            x[i].style.backgroundColor = "blue";
        }
        flag = 1;
    }
}

let cambio = 0;

function cambiar_Color1() {
    var x = document.querySelectorAll("input.b")
    var i;
    if (cambio) {

        for (i = 0; i < x.length; i++) {
            x[i].style.backgroundColor = "red";
        }
        cambio = 0;
    } else {

        for (i = 0; i < x.length; i++) {
            x[i].style.backgroundColor = "blue";
        }
        cambio = 1;
    }

}