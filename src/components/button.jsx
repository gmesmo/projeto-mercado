import React from 'react';

const Button = ({ CodProd }) => {
    if (CodProd) {
        return ( 
            <>
                {inCart}
            </>
         );
    }
}

function inCart() {
    return(
        <button>
            TESTE
        </button>
    );
}
 
export default Button;