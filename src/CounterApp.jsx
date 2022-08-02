import PropTypes from 'prop-types';

const handleAdd = ( event, newValue ) => {

    console.log( event );
    console.log( newValue );

}

// se crea rapido escribiendo rafc
export const CounterApp = ( { value } ) => {
    //<CounterApp value={ 123456 }></CounterApp>

    /* function handleAdd( event, newValue ){

        console.log( event );
        console.log( newValue );
    } 
    */

    /* const handleAdd = ( event, newValue ) => {

        console.log( event );
        console.log( newValue );
    
    } 
    */

    return(

        <>
            <h1>CounterApp - h1</h1>
            <h2> { value } </h2>

            <button onClick={ /* ( event ) => */ handleAdd/* ( event ) */ }> +1 </button>
            <button onClick={ ( event ) => handleAdd( event, 'hola chaval' ) }> +1 </button>
        </>
    )
}

CounterApp.propTypes = {

    value: PropTypes.number.isRequired //define value como numero y es siempre requerido un numero ahi
}