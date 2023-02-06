// var n = window.prompt("Inserta un número entero: "); //pide info al user y lo regresa en forma de String.
//     alert(n+n+2); //en esta línea se concatenan los elementos, más no se resuelven entre sí, sino que se muestran uno al lado del otro. "concatenado"
//     n = parseInt(n); //transforma la string a un número entero
//     alert(n+n+2); //una vez transformado la variable a entero, se puede resolver, y se resuelve.
//     var n2 = window.prompt("Inserta un número real: ");
//     alert(n2+n2+2);
//     n2 = parseFloat(n2);
//     alert(n2+n2+2);
// var n3 = parseInt(window.prompt("Inserta un número entero para n3: "));
//     alert(n3*2);

// var n = 9;
//     var n2 = 9;
//     console.log(n == n2); // Devuelve true porque son iguales los contenidos de las variables
//     var n3 = 109;
//     console.log(n == n3); // Devuelve false porque no son iguales los contenidos de las variables
//     var n4 = '9';
//     console.log(n == n4);// Devuelve true porque son iguales los contenidos de las variables aunque no los tipos
//     var n5 = 9.0;
//     console.log(n == n5);// Devuelve true porque son iguales los contenidos de las variables aunque no los tipos

    //2do ejemplo

    // const n = 9;
    // var n2 = prompt("Inserta un número");
    // if (n == n2) {
    //     alert("Has acertado el número");
    // } else {
    //     alert("No has acertado el número");
    // }

    // var foo = 2;
    // switch (foo) {
    // case -1:
    //     console.log('1 negativo');
    //     break;
    // case 0: // foo es 0, por lo tanto se cumple la condición y se ejecutara el siguiente bloque
    //     console.log(0)
    //     // NOTA: el "break" olvidado debería estar aquí
    // case 1: // No hay sentencia "break" en el 'case 0:', por lo tanto este caso también será ejecutado
    //     console.log(1);
    //     break; // Al encontrar un "break", no será ejecutado el 'case 2:'
    // case 2:
    //     console.log(2);
    //     break;
    // default:
    //     console.log('default');
    // }

    // var n = 9;
    // while(n > 3){
    //     console.log(n);
    //     n--; //n = n -1
    // }

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