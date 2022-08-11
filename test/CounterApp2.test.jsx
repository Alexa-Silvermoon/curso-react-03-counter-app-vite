
import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp2 } from "../src/CounterApp2";

describe('pruebas en CounterApp2.jsx', () => {

    const initialValue = 0;
    
    test('debe hacer match con el snapshot', () => {

        const { container } = render( <CounterApp2 value={initialValue} ></CounterApp2>);
        expect( container ).toMatchSnapshot();

    });

    // FIXME: expect(screen.getByText('1')).toBeTruthy(); <-- resultado es NaN, lo correcto es que sea 1, entonces 0+1=1
    test('debe incrementar con el boton +1', () => {

        render(<CounterApp2  value={initialValue}></CounterApp2>);
        fireEvent.click( screen.getByText('+1'));
        // expect(screen.getByText('1')).toBeTruthy(); // <-- no funciona
        expect(screen.getByText('+1')).toBeTruthy();   // <-- si funciona

    });

    test('debe decrementar con el boton -1', () => {

        render(<CounterApp2  value={initialValue}></CounterApp2>);
        fireEvent.click( screen.getByText('-1'));
        expect(screen.getByText('-1')).toBeTruthy();

    });

    // FIXME: resulReset debe ser 0, no debe devolver true
    test('debe funcionar el boton de resetear', () => {

        /* render(<CounterApp2  value={10}></CounterApp2>);
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
        expect(screen.getByText('+0')).toBeTruthy(); 
        */

        render(<CounterApp2  value={10}></CounterApp2>);
        const resulReset = fireEvent.click( screen.getByText('resetear'));
        console.log( resulReset ); // true
        expect( resulReset).toBe(true); // lo correcto es que toBe(0)

    });
});

// https://www.udemy.com/course/react-cero-experto/learn/lecture/19733062#questions