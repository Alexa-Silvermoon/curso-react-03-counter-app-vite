
//USO DE HOOKS CON useState

import { useState } from 'react';//useState es una funcion que devuelve un arreglo

// se crea rapido escribiendo rafc
export const CounterApp2 = ( { valorInicial } ) => {

    console.log( 'render' );
    //API.. FETCH...

    const [ counter, setCounter ] = useState( valorInicial ); // 0 es el valor inicial
    // el setCounter le dice a React que el estado cambio, asi que hay que renderizar el componente de nuevo

    const aumentar = (  ) => {

        setCounter( counter + 1 ); // forma 1
        // setCounter( ( counter ) =>  counter + 1  ); // forma 2

    }
    
    const reducir = (  ) => {

        setCounter( counter - 1 );

    }
    const resetear = (  ) => {

        // setCounter( counter - counter ); // tecnicamente no es valido pero si funciona
        setCounter( valorInicial );

    }

    return(

        <>
            <h1>CounterApp2 - h1</h1>
            <h2> { counter } </h2>

            <button onClick={ /* ( event ) => */ aumentar/* ( event ) */ }> +1 </button>
            <button onClick={ reducir}> -1 </button>
            <button onClick={ resetear }> resetear </button>
        </>
    )
}

//NOTA: el useState hook hace que el valor no sea mutable con el props