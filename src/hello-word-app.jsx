// import { Fragment } from "react";// es para usar multiples etiquetas en el return

import PropTypes from 'prop-types'; //hace obligatorio lo que venga desde main.jsx, ya sea string o number
// en caso de no tener instalado prop-types, abrir cmd y ejecutar comando
// yarn add prop-types

export function App2() {

    return (<h1>hola mundo desde App2 hello-word-app.jsx</h1>);
}

export const App3 = () => {

    return(
        <h1>hola mundo desde App3 hello-word-app.jsx</h1>
    )
}

export const FirstApp = () => {

    return(
        <h1> Christian Alexander Martinez Millan </h1>
    );

}

const nuevoMensaje = 'mensaje como const'
const arreglo = [1,2,3,4,5];

const mensajeObjeto = {

    mensaje: 'mensaje objeto',
    titulo: 'mensaje objeto - titulo'
}

const getResult = (a,b) => {

    const vocales = ['a','e','i','o','u'];
    const numeros = [1,2,3,4,5,6,7,8,9];
    const c = a + b;
    
    const fusion = c + vocales + numeros ;
    return( fusion );
}

export const FirstApp2 = () => {

    return( //en caso de no querer usar fragment, se puede usar div, o se puede usar <></> pero vacios, esto se le conoce como nodo padre

        <>
            <h1> Christian Alexander Martinez Millan </h1>
            <p> estoy estudiando react + vite </p>
            <h1> { nuevoMensaje } </h1>
            <h1> { arreglo } </h1>
            <h1> { JSON.stringify( mensajeObjeto ) } </h1>
            <h1> { getResult(2,2) } </h1>
        </>
    );

    /* 
    return(

        <Fragment>
            <h1> Christian Alexander Martinez Millan - Fragment </h1>
            <p> estoy estudiando react + vite </p>
        </Fragment>
    );
     */

     /* 
    return(

        <div>
            <h1> Christian Alexander Martinez Millan </h1>
            <p> estoy estudiando react + vite </p>
        </div>
    );
     */

}

// export const FirstApp3 = ( props ) => {
// export const FirstApp3 = ( { title = 'se te esta olvidando el title mi rey' } ) => { //desestructure el props
export const FirstApp3 = ( { title, subTitle, subTitle2, name } ) => { //desestructure el props
    
// export const FirstApp3 = ( { title, subTitle, subTitle2 = 'la tierra es plana' } ) => { //desestructure el props

    //         <FirstApp3 title="soy el title" subTitle="soy el subTitle"></FirstApp3>
    // comilla doble lo convierte en string

    /* 
    en componenets en consola de chrome:
    {
  "title": "hola soy goku"
    }
    */

    // console.log( props );

    return(

        <>
            {/* <h1>{ props.title }</h1> */}
            <h1>{ title }</h1>
            <p> { subTitle + " alexander " + 95 } </p>   {/* 95 se vuelve string */}
            <p> { subTitle2 }</p> {/* 1995 si es un numero */}
            <p> soy un p </p>
            <p> { name } </p>
        </>
    )
}

FirstApp3.propTypes = {

    title: PropTypes.string.isRequired,
    //hace que lo que venga en el title sea obligatoriamente un string, sino da error

    subTitle2: PropTypes.number
    //hace que sea un numero obligatoriamente, sino da error

}

FirstApp3.defaultProps = {//defaultProps se activan antes que los propTypes

    title: 'ho hay titulo - defaultProps',//parece esto en caso de que title="soy el title" no exista en main.jsx
    subTitle: 'no hay subtitulo - defaultProps',
    name: 'Alexander - defaultProps' //no existe en main.jsx pero igual aparece en el html gracias a los defaultProps
}