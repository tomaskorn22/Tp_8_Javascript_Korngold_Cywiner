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
