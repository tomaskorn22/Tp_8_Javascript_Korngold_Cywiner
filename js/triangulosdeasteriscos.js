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
