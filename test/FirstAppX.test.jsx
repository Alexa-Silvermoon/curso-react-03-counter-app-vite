
import { render } from "@testing-library/react";
import { FirstAppX } from "../src/FirstAppX";

describe('Pruebas en FirstAppX', () => {

    test('debe hacer match con el snapshot', () => {

        const title = 'title en FirstAppX - main.jsx';

        const { container } = render(<FirstAppX title={title}/>);

        expect( container ).toMatchSnapshot();


    });

    test('debe mostrar el titulo en un h1', () => {

        const title = 'title en FirstAppX - main.jsx';
        const { container, getByText, getByTestId } = render(<FirstAppX title={title}></FirstAppX>);
        
        expect(getByText( title )).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // console.log( h1.innerHTML );

        // expect( h1.innerHTML ).toBe( title );
        // expect( h1.innerHTML ).toContain( title );
        expect( getByTestId('test-title').innerHTML ).toBe( title );

    });

    test('debe mostrar los subtitulos enviado por props', () => {

        const title = 'title en FirstAppX - main.jsx';
        const subTitle = 'soy un subtitulo';

        // const { getByText } = render(<FirstAppX title={title} subTitle={subTitle} ></FirstAppX>);
        const { getAllByText } = render(<FirstAppX title={title} subTitle={subTitle} ></FirstAppX>);
        
        // expect(getByText( subTitle )).toBeTruthy();
        // getByText se asegura de que solo se tome un subtitulo en este caso


        expect(getAllByText( subTitle ).length).toBe(2);
        // getAllByText se encarga de tomar los dos subtitulos y los convierte en arreglo aqui

    });
});

// https://www.udemy.com/course/react-cero-experto/learn/lecture/32002690#questions    prueba title en h1
// https://www.udemy.com/course/react-cero-experto/learn/lecture/32003184#questions    prueba title en div