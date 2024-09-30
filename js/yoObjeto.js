const ciudad = {
    nombre: "Barcelona",
    fechaFundacion: "15 de abril de 1450",
    poblacion: 1620343,
    extension: "101.4 km²"
};

for (const clave in ciudad) {
    if (ciudad.hasOwnProperty(clave)) {
        console.log(`Clave: ${clave}, Valor: ${ciudad[clave]}`);
    }
}
