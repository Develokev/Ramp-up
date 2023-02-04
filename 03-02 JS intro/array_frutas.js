let frutas = ["Manzana", "Banana"];
    console.log(frutas); // Manzana y Banana 
    console.log(frutas.length); // 2
    let primero = frutas[0] // Manzana
    let ultimo = frutas[frutas.length - 1]; // Banana
    let nuevaLongitud = frutas.push('Naranja'); // Añade "Naranja" al final
    // ["Manzana", "Banana", "Naranja"]
    ultimo = frutas.pop(); // Elimina "Naranja" del final
    // ["Manzana", "Banana"]

function add(){
    frutas.push("Kiwi");
    alert(frutas);
    console.log(frutas);
}

function restar(){
    frutas.pop();
    alert(frutas);
    console.log(frutas);
}

