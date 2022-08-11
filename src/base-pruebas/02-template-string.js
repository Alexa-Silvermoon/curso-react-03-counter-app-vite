
export function getSaludo(nombre) {
    return 'hola ' + nombre;
}

const nombre = 'Alexander';

console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );