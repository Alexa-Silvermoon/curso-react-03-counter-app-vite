
// https://www.udemy.com/course/react-cero-experto/learn/lecture/19727760#questions/13322514

// dependencia  a instalar:   yarn add -D whatwg-fetch
// dependencia a instalar:    yarn add -D isomorphic-fetch

// export default setupFiles = ['./jest.setup.js'];
// export const setupFiles = ['./jest.setup.js'];


module.exports = {

    // TODO: jsdom,
    testEnvironment: 'jest-environment-jsdom',

    setupFiles: ['./jest.setup.js']
}


// esto sirve para hacer pruebas con jest mas exactamente con fetch

// en caso de no funcionar:  'whatwg-fetch'
// probar con:               'isomorphic-fetch'


// para instalar la dependencia de testEnvironment: 'jest-environment-jsdom',
// usar el comando en el cmd:    yarn add -D jest-environment-jsdom