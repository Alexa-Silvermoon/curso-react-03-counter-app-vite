import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('pruebas en 07-deses-arr.js', () => {

    test('debe esperar un arreglo con string y numeros', () => {

        const retornaArregloTEST = () =>{
            return ['ABC', 123];
        }
        
        const [ letras, numeros ] = retornaArreglo();
        const [ letrasTEST, numerosTEST ] = retornaArregloTEST();

        expect( [ letras, numeros ] ).toStrictEqual( [ letrasTEST, numerosTEST ] );
        expect( numeros ).toBe( 123 );

        expect( typeof letras ).toBe( 'string' );
        expect( typeof numeros ).toBe( 'number' );

        expect( letras ).toEqual( expect.any(String) );//espera algun string, no importa lo que sea, pero que sea un string


    });
});