import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('pruebas en 02-template-string', () => {

    test('getSaludo debe retornar "hola christian"', () => {

        const name = 'christian';
        const message = getSaludo( name );

        expect( message ).toBe( `hola ${ name }` )

    });
});

// https://www.udemy.com/course/react-cero-experto/learn/lecture/19710870#questions