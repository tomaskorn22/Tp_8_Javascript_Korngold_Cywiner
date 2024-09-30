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
