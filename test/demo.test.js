
describe('pruebas en <componenteDemo/>', () => {

  // CASO DONDE HAY FALLA:
  test('esta prueba no puede fallar A, EEROR A PROPOSITO', () => {
  
      if ( 0 === 0 ){
  
          throw new Error('No se puede dividir entre 0');
      }
  })
  
  
  // CASO DONDE HAY EXITO:
  test('esta prueba no puede fallar B', () => {
  
      if ( 1 === 0 ){
  
          throw new Error('No se puede dividir entre 0');
      }
  })
  
  test('prueba de jest - expect - toBe', () => {
    
    // 1 inicializacion
    const mensaje1 = 'hola mundo';
  
    // 2 estimulo
    const mensaje2 = mensaje1.trim(); //trim elimina los espacios en blanco
  
    // 3 observer el comportamiento esperado
    expect( mensaje1 ).toBe( mensaje2 );
  })
  
})


/* 
https://www.udemy.com/course/react-cero-experto/learn/lecture/19706544#questions

https://jestjs.io/docs/getting-started

----------------------------------------------------------------------------------------

1 - hacer la instalacion de jest ejecutando el siguiente comando en el cmd

yarn add --dev jest

----------------------------------------------------------------------------------------

2 - agregar el script de jest al archivo package.json
ej:

{
  "scripts": {
    "test": "jest"
  }
}

---------------------------------------------------------------------------------------

3 - poner a correr el jest usando el el siguiente comando en el cmd:

yarn test

nota: si estuvieramos en npm el comando seria npm run test

nota: en caso de no tener ninguna prueba realizada, se arrojara la advertencia de que jest no encontro
pruebas, lo cual nos indicara que empezemos a hacer nuestras pruebas

------------------------------------------------------------------------------------------

4 - para hacer pruebas, crearemos en la raiz de nuestro proyecto la carpeta "tests"
que tambien puede ser vista como "src2" y dentro de la carpeta tests se crea el archivo
"demo.test.js" en ese archivo van nuestras pruebas

-------------------------------------------------------------------------------------------------------

5 - dentro del archivo "demo.test.js" escribimos los 2 posibles escenarios:

// CASO DONDE HAY FALLA:
test('esta prueba no puede fallar A', () => {

    if ( 0 === 0 ){

        throw new Error('No se puede dividir entre 0');
    }
})


// CASO DONDE HAY EXITO:
test('esta prueba no puede fallar B', () => {

    if ( 1 === 0 ){

        throw new Error('No se puede dividir entre 0');
    }
})

--------------------------------------------------------------------------------------------------

6 - para hacer las pruebas mas rapido podemos ir a nuestro archivo package.json y en la
seccion de scripts, modificarlo de la siguiente forma:

{
  "scripts": {
    "test": "jest --watchAll"
  }
}

nota: si ejecutamos el comando "yarn test" en el cmd, veremos que el menu de jest cambiara un poco

-------------------------------------------------------------------------------------------------

7 - ahora podemos hacer pruebas en nuestro archivo "demo.test.js" y juesto cuando le damos a 
guardar, al otro lado en la venta de cmd se hara ejecutara la prueba en tiempo real


*/