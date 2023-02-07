//Una función que devuelva el número de cifras de un entero solicitado al usuario//

function cantidad_cifras() {
  let n = prompt("Hola, por favor, introduce un número entero");
  if (n == parseInt(n)) {
  alert("Tu número tiene " + n.length + " cifras."); }
  else {
    alert("Número inválido, por favor intente de nuevo.");
  }
}

// cantidad_cifras();

//Una función que muestre al usuario una secuencia de * (se debe construir la cadena de uno en uno), la cantidad de * será solicitada al usuario

function asterisc_sec() {

let num = prompt("Indica un número:");
let cont = [];
const AST = "*"

for(let i = 0; i < num; i++){
    cont[i] = AST;
    console.log(cont);
    alert(cont)
}
}

asterisc_sec();

//Una función que permita mostrar la secuencia (se debe construir la cadena de uno en uno):  "*+_*+_*+_*+_"
