import React from 'react';

const Button = ({ produto }) => {

    if (produto) {
        return ( 
            <>
                {inCart()}
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