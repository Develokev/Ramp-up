//1er ejercicio resuelto:
//Solicita al usuario tres números enteros e indícale cuál es el menor.
let n = prompt("Por favor, inserta un numeracho");


//2do ejercicio resuelto:
// EJERCICIO 2: Solicita al usuario una frase y una letra y muestra la cantidad de veces que aparece la letra en la frase.

    var frase = prompt("Indica una frase: ");
    console.log(frase);
    var letra = prompt("Indica una letra: ");
    console.log(letra);
    var cont = 0
    
    for (let i = 0; i < frase.length; i++) {
       if (frase[i] == letra) {
        cont++
       }
    }
    alert(cont)