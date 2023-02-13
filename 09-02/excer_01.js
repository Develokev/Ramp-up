//1º Solicite al usuario el ingreso por teclado de 3 notas
//2º Saque la media de las notas
//3º Muestre por pantalla
    //si la nota es menor que 5 'SUSPENSO'
    //si la nota es mayor o igual 5 y menor que 7 'APROBADO'
    //si es mayor o igual que 7 y menor o igual que 10 'sobresaliente'

    function media() {
        let nota_media = (nota1 += nota2 += nota3)%3;
        alert("Tu promedio actual es " + parseInt(nota_media) + " puntos.");
        return
    }

var nota1 = prompt("Hola, por favor escriba su primera nota en números");
var nota2 = prompt("Gracias, a continuacion escriba su segunda nota en números.");
var nota3 = prompt("Gracias, finalmente, escriba su tercera nota en números.");
var nota_media = media();
var aprobado = suspenso();

function suspenso() {
    if (nota_media < 5)
    alert("Lo siento, has suspendido")
    else {
        alert("Felicitaciones, has aprobado.")
}}


function sobresaliente() {
    if (nota_media >= 7)
    alert("Felicitaciones, has salido sobresaliente")
    else {
        alert("Tu " + nota_media + " no ha sido de las mejores en promedio")
    }}

sobresaliente();
