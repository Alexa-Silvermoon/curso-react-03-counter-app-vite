import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('pruebas en 08-imp-exp.js', () => {

    test('getHeroeById debe retornar un heroe por ID', () => {

        const id = 1; // 1 para batman
        const heroe = getHeroeById( id );
        console.log( heroe );

        expect( heroe ).toEqual( { id: 1, name: 'Batman', owner: 'DC' } );

    });

    test('getHeroeById debe retornar un heroe por ID - ERROR A PROPOSITO', () => {

        const id = 200; // 2 para Spiderman
        const heroe = getHeroeById( id );
        console.log( heroe );

        expect( heroe ).toEqual( { id: 2, name: 'Spiderman', owner: 'Marvel' } );

    });

    test('getHeroeById debe retornar undefined si no existe', () => {

        const id = 300; // 3 para Superman
        const heroe = getHeroeById( id );
        console.log( heroe );

        expect( heroe ).toBeFalsy();

    });

    // TODO: hacer un test que solo devuelva heroes de marvel

    test('getHeroesByOwner solo devuelve heroes de Marvel', () => {

        const heroesMarvel = getHeroesByOwner( 'Marvel' );
        console.log( heroesMarvel );

        const heroesMarvelTEST = heroes.filter( ( heroe ) => heroe.owner === 'Marvel' );


        expect( heroesMarvel ).toEqual( heroesMarvelTEST );
        expect( heroesMarvel.length ).toBe( 2 );

    });



    // TODO: hacer un test que devuelva solo heroes de DC
    test('getHeroesByOwner solo devuelve heroes de DC', () => {

        const heroesDC = getHeroesByOwner( 'DC' );
        console.log( heroesDC );

        const heroesDCTEST = heroes.filter( ( heroe ) => heroe.owner === 'DC' );
        

        expect( heroesDC ).toEqual( heroesDCTEST );

        // trayendo directamente el arreglo de objetos (en duro)
        expect( heroesDC ).toEqual([ 

            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }

        ]);

    });
});