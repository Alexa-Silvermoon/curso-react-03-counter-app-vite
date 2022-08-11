import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('pruebas en CounterApp.jsx', () => {

    const intialValue = 100;

    test('debe hacer match con el snapshot', () => {

        const { container } = render( <CounterApp value={intialValue} ></CounterApp>);
        expect( container ).toMatchSnapshot();

    });

    test('debe mostrar el valor inicial de 100 <CounterApp  value={100}>', () => {

        render( <CounterApp  value={intialValue}></CounterApp>);
        expect( screen.getByText(intialValue)).toBeTruthy();

        // level: 2 significa que revisa el segundo renglon en el return del arhivo original
        // innerHTML le dice a la prueba que solo se enfoque en el html
        // toContain en este caso debe contener obligatoriamente el 100 en un string
        expect( screen.getByRole('heading', {level: 2} ).innerHTML).toContain('100');

    });
});
