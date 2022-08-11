
import { usContext } from '../../src/base-pruebas/06-deses-obj';

describe( 'pruebas en 06-deses-obj.js', () => {

    test('debe desestructurar a usContext', () => {

        const persona = {
            nombre: 'Tony',
            edad: 45,
            clave: 'Ironman'
        };

        const usContextTest = ({ clave, nombre, edad, rango = 'Capitán' }) => {


            // console.log( nombre, edad, rango );
            
            return {
                nombreClave: clave,
                anios: edad,
                latlng: {
                    lat: 14.1232,
                    lng: -12.3232
                }
            }
        
        }
        
        const resp = usContext( persona );
        const respTest = usContextTest( persona );


        expect( resp ).toEqual( respTest );
    })
})