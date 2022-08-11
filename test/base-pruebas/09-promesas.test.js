import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('pruebas en 09-promesas.js', () => {

    test('getHeroeByIdAsync debe retornar un heroe', ( done ) => {
        // done() es para indicarle a jest que espere hasta que se termine de realizar todo el proceso

        const id = 1;
        getHeroeByIdAsync( id )
        .then( hero => {

            expect( hero ).toEqual({

                id: 1,
                name: 'Batman',
                owner: 'DC'

            });

            done();
            // done() es para indicarle a jest que espere hasta que se termine de realizar todo el proceso

        });

    });

    test('getHeroeByIdAsync debe obtener un .catch(error) si heroe no existe', ( done ) => {
        // done() es para indicarle a jest que espere hasta que se termine de realizar todo el proceso

        const id = 100;
        getHeroeByIdAsync( id )
        .catch( error => {

            console.log( error ); // 'No se pudo encontrar el héroe'
            // expect( error ).toBe( `No se encontro hero con id: ${ id }` )

            done();
            // done() es para indicarle a jest que espere hasta que se termine de realizar todo el proceso

        });

    });

});