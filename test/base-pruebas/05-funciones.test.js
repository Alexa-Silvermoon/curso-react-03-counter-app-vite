
import { getUser } from '../../src/base-pruebas/05-funciones';
import { getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('pruebas en 05-funciones.js', () => {

    test('getUser debe retornar un objeto', () => {

        const testUser = {

            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        // expect( testUser ).toBe( user ); // <- da error
        // expect( testUser ).toStrictEqual( user ); // <-- pasa
        expect( testUser ).toEqual( user ); // <-- pasa
        // en caso de error probar: expect( testUser ).toEqual( user );   o    expect( testUser ).toStrictEqual( user );

    });

    //tarea getUsuarioActivo

    test('getUsuarioActivo debe retornar un objeto', () => {

        
        const nombre = 'jeronimo';

        const testUser2 = {

            uid: 'ABC567',
            username: nombre
        };
        
        const user2 = getUsuarioActivo( nombre );

        expect( user2 ).toEqual( testUser2 );


    })
});

// https://www.udemy.com/course/react-cero-experto/learn/lecture/19711318#questionsK
