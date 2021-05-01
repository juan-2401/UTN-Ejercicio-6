var nombre = "Juan";

console.log(nombre);

var numero = 1000;

console.log(numero);

var persona = {
    nombres: "Juan Pablo",
    apellidos: "Ferreira"
};

console.log(persona);

function cambio_titulo() {/* Al momento de cargar el sitio si detecta que es un celular cambia el titulo */
    if (window.innerWidth < 676) { 
        var titulo = document.getElementById('titulo');
        titulo.innerHTML="Titulo de Celular";
    } else {
        titulo.innerHTML="Titulo de PC";
    }        
}
