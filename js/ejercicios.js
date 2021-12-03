'use strict'

//Ejercicio 2
function cargarTiempo() {
    const xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function(){
        console.log(this.readyState, this.status)
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('span1').innerHTML = this.responseText
        }
    }
    xhttp.open('GET', 'https://api.tutiempo.net/xml/?lan=es&apid=axYXXzXaza4B850&lid=7414', true)
    xhttp.send()
}

//Ejercicio 3
function cargarPelicula() {
    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=f02e43b0&t=+campeones')//Hacemos la peticón
        .then(respuesta => respuesta.text())//Recibimos un objeto
        .then(texto => document.getElementById('span2').innerHTML = texto)
}