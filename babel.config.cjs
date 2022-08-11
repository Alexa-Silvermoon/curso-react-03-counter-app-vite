
/* module.exports = {
    presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
}; */

// https://www.udemy.com/course/react-cero-experto/learn/lecture/32002230?start=15#questions
module.exports = {
  
  presets: [
    
    ['@babel/preset-env', { targets: { esmodules: true } } ],
    ['@babel/preset-react', { runtime: 'automatic' } ],
  
  ],

};

// las siguientes dos lineas seran para hacer pruebas en componentes de react:
// usar el comando en el cmd:    yarn add -D jest-environment-jsdom
// en el cmd ejecutar el comando       yarn add -D @babel/preset-react
// https://www.udemy.com/course/react-cero-experto/learn/lecture/32002230?start=15#questions