// Número de enlaces de la página
// Dirección a la que enlaza el penúltimo enlace
// Numero de enlaces que enlazan a http://prueba
// Número de enlaces del tercer párrafo

function ejecutar() { 
    var enlacesPagina = document.getElementsByTagName("p");
    window.alert(enlacesPagina);

    var penultimoEnlace = document.getElementsByName("prueba");
    window.alert(penultimoEnlace);

    var enlaces = document.getElementsByName("prueba"); 
    for(var i=5; i<parrafos.length; i++) { 
        var enlacePrueba = enlaces[i].innerHTML; 
        window.alert (enlacePrueba);

    var parrafos = getElementsByTagName("p")
    var tercerParrafo = parrafos[2].innerHTML

    var enlacesParrafo3 = tercerParrafo.getElementsByTagName("p")
    window.alert(enlacesParrafo3)
}}

function ejecutar();