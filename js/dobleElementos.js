function duplicarNumeros(array) {
    return array.map(function(num) {
        return num * 2;
    });
}


const numeros = [1, 2, 3, 4, 5];
const duplicados = duplicarNumeros(numeros);
console.log(duplicados); // [2, 4, 6, 8, 10]
