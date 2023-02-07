//EJERCICIO 1 en función//
function numero_menor() {
    var n1 = parseInt(prompt("Introduce un números"));
console.log(n1);
var n2 = parseInt(prompt("Introduce otro número diferente"));
console.log(n2);
var n3 = parseInt(prompt("Introduce un último número distinto de los otros dos"));
console.log(n3);


if (n1 === n2 && n2 === n3) {
  alert("Error al introducir datos");
} else {
  if (n1 < n2 && n1 < n3) {
    alert(n1 + " es el menor de todos los números indicados");
  } else {
    if (n2 < n3 && n2 < n1) {
      alert(n2 + " es el menor número de todos");
    } else {
      if (n3 < n2 && n3 < n1) {
        alert(n3 + " es el menor número de todos"); //se puede evitar el alert, asumiendo que solo queda esta opción y es true.
      }
    }
  }
}
}

//EJERCICIO 2 en función//
function letra_repetida () {
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
}

//EJERCICIO 3 en función//
const suma_resta = function () {
    var n1 = parseFloat(prompt("Por favor, escriba un número"));
console.log(n1);
var n2 = parseFloat(prompt("Gracias, por favor, escriba otro número"));
console.log(n2);
var sumrest = prompt("Escribe '+' si quieres sumarlos, o escribe '-' si quieres restarlos");
console.log(sumrest);
var result = 0;

if (sumrest == '+') {
    result = (n1+n2);
    alert(result);
} else {
    (sumrest == '-');
    result = (n1-n2);
    alert(result);
}

console.log(result);
}

//EJERCICIO 4 en función//
const user_validation = () => {
    var n1 = parseFloat(prompt("Por favor, escriba un número"));
console.log(n1);
var n2 = parseFloat(prompt("Gracias, por favor, escriba otro número"));
console.log(n2);
var sumrest = prompt("Escribe '+' si quieres sumarlos, o escribe '-' si quieres restarlos");
console.log(sumrest);
var result = 0;

if (sumrest == '+') {
    result = (n1+n2);
    alert(result);
} else {
    (sumrest == '-');
    result = (n1-n2);
    alert(result);
}

console.log(result);}

function ejercicio_5() {
//aquí va el código del 5to ejercicio//
}

function ejercicio_6 () {
//aquí va el código del 6to ejercicio//
}