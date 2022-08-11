
import PropTypes from 'prop-types'; //hace obligatorio lo que venga desde main.jsx, ya sea string o number

export const FirstAppX = ( { title, subTitle } ) => {

    return(

        <>
        
            {/* <div data-testid="test-title">{title}</div> */} {/* esta linea sirve para documento FirstAppX.test.jsx */}
            <h1 data-testid="test-title">{title}</h1> {/* esta linea sirve para documento FirstAppX.test.jsx */}
            <p>{subTitle}</p>
            <p>{subTitle}</p>
            {/* <h1>{title}</h1> */}
            <p>p en FirstAppX.jsx</p>
        
        </>
        
    );

}

FirstAppX.propTypes = {

    title: PropTypes.string.isRequired,
    //hace que lo que venga en el title sea obligatoriamente un string, sino da error

    subTitle: PropTypes.string

}