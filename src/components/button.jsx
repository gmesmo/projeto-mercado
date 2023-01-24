import React from 'react';

import "./style/button.css"

const Button = ({ produto }) => {

    if (produto) {
        return ( 
            <>
                {addCart()}
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

function addCart() {
    return (
        <button className='AddButton'>
            ADICIONAR
        </button>
    );
}

export default Button;