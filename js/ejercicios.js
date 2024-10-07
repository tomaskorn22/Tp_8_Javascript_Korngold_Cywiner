//EJERCICIO CALCULADORA DE EDAD
function calcularEdad(fechaNacimiento) {
    const fechaActual = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = fechaActual.getFullYear() - nacimiento.getFullYear();
    const mesActual = fechaActual.getMonth();
    const mesNacimiento = nacimiento.getMonth();

    
    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && fechaActual.getDate() < nacimiento.getDate())) {
        edad--;
    }
    
    return edad;
}



const nombre = prompt("¿Cuál es tu nombre?");
const fechaNacimiento = prompt("¿Cuál es tu fecha de nacimiento? (Formato: YYYY-MM-DD)");


const edad = calcularEdad(fechaNacimiento);


console.log(`Hola ${nombre}, tienes ${edad} años!`);
//COMPARANDO DATOS Y TIPOS
let num1
let num2
num1 = (10 =='10') 
num2 = (10 ==='10') 
console.log("el numero 10.6 es de tipo " + typeof(10.6))

//DOBLE ELEMENTOS
function duplicarNumeros(array) {
    return array.map(function(num) {
        return num * 2;
    });
}


const numeros = [1, 2, 3, 4, 5];
const duplicados = duplicarNumeros(numeros);
console.log(duplicados); // [2, 4, 6, 8, 10]

//NOMBRES QUE CONTIENEN A
function filtrarNombres() {
    let nombres = document.getElementById("nombres").value;
    
    let listaNombres = nombres.split(',').map(nombre => nombre.trim());
    
    let nombresConA = listaNombres.filter(nombre => nombre.charAt(0).toLowerCase() === 'a');
    
    document.getElementById("resultado").innerHTML = nombresConA.length > 0 ? nombresConA.join(', ') : 'No hay nombres que comiencen con "A"';

}

//TIRANDO FRUTA
const frutas = [
    "manzana",
    "banana",
    "naranja",
    "fresa",
    "kiwi",
    "uva",
    "mango",
    "piña",
    "pera",
    "cereza"
];


const frutaUsuario = prompt("Por favor ingresa una fruta:").toLowerCase();


if (frutas.includes(frutaUsuario)) {
    console.log(`Sí, tenemos ${frutaUsuario}`);
} else {
    console.log(`No, no tenemos ${frutaUsuario}`);
}

//TRIANGULOS DE ASTERISCOS
//Primer Triangulo
for (let i = 1; i <= 5; i++) {
    console.log('*'.repeat(i));
}

//Segundo Triangulo

let n = 5; 
for (let i = 1; i <= n; i++) {
    let spaces = '-'.repeat(n - i); 
    let stars = '*'.repeat(2 * i - 1); 
    console.log(spaces + stars + spaces); 
}

//YO OBJETO
const ciudad = {
    nombre: "Barcelona",
    fechaFundacion: "15 de abril de 1450",
    poblacion: 1620343,
    extension: "101.4 km²"
};

for (const clave in ciudad) {
    if (ciudad.hasOwnProperty(clave)) 
    {
        console.log(`Clave: ${clave}, Valor: ${ciudad[clave]}`);
    }
}
//Remplazar Palabras
function reemplazarPalabra() {
    
    let cadena = document.getElementById("cadena").value;
    let palabra = document.getElementById("palabra").value;
    let reemplazo = document.getElementById("reemplazo").value;

    
    let cadenaModificada = cadena.replaceAll(palabra, reemplazo);

    
    document.getElementById("resultado").innerHTML = cadenaModificada;
}
//cortar texto
function obtenerPrimerosCaracteres() {
    
    let cadena = document.getElementById("cadena").value;
    let numero = parseInt(document.getElementById("numero").value);
    if (numero > cadena.length)
     {
        numero = cadena.length;
    }
    let cadenaCortada = cadena.substring(0, numero);
    document.getElementById("resultado").innerHTML = cadenaCortada;
}

//String con separador
function mostrarLista() {
    let lista = document.getElementById("lista").value;
    let arrayElementos = lista.split(',').map(elemento => elemento.trim());
    let resultado = arrayElementos.join(' - ');
    document.getElementById("resultado").innerHTML = resultado;
}

//
function calcularRecaudacion() {
    let pedidos = document.getElementById("pedidos").value;

    let arrayPedidos = pedidos.split(',');
    let recaudacionTotal = 0;
    arrayPedidos.forEach(pedido => {
        let [nombre, total] = pedido.split(':').map(elemento => elemento.trim());
        recaudacionTotal += parseFloat(total);
    });
    document.getElementById("resultado").innerHTML = `Total: $${recaudacionTotal.toFixed(2)}`;
}

