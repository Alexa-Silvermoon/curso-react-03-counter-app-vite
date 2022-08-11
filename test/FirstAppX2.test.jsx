
import { render, screen } from "@testing-library/react";
import { FirstAppX } from "../src/FirstAppX";

describe('pruebas optimizadas en FirstAppX', () => {

    const title = 'title en FirstAppX - main.jsx';
    const subTitle = 'subtitulo en FirstAppX';

    test('optimizado - debe hacer match con el snapshot', () => {

        const { container } = render( <FirstAppX title="title" ></FirstAppX>);

        expect( container ).toMatchSnapshot();

    });

    test('optimizado - debe mostrar el mensaje "title en FirstAppX - main.jsx"', () => {

        render(<FirstAppX title={title}></FirstAppX>);
        // screen.debug(); //<-- sirve para mostrar en consola como esta quedando el DOM
        expect( screen.getByText(title) ).toBeTruthy(); // verificar que SI exista
        // expect( screen.getByText(title) ).not.toBeTruthy(); // verificar que NO exista

    });

    test('optimizado - debe mostrar el titulo en un h1', () => {

        render(<FirstAppX title={title}></FirstAppX>);
        expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(title);

    });

    test('optimizado - debe mostrar el subtitulo por props', () => {

        render(<FirstAppX title={title} subTitle={subTitle}></FirstAppX>);
        expect( screen.getAllByText(subTitle).length).toBe(2);
        
    });
});

// https://www.udemy.com/course/react-cero-experto/learn/lecture/32003486#questions
