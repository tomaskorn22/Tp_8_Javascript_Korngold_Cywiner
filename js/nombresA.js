function filtrarNombres() {
    let nombres = document.getElementById("nombres").value;
    
    let listaNombres = nombres.split(',').map(nombre => nombre.trim());
    
    let nombresConA = listaNombres.filter(nombre => nombre.charAt(0).toLowerCase() === 'a');
    
    document.getElementById("resultado").innerHTML = nombresConA.length > 0 ? nombresConA.join(', ') : 'No hay nombres que comiencen con "A"';
}
