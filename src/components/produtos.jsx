import React from 'react';
import Produto from './produto';

import "./style/produtos.css"

const Produtos = ({ produtos }) => {
    return ( 
        <>
            <div className="prod-container">
                {produtos.map((produto) => 
                    <Produto produto={produto} />
                )}
            </div>
        </>
     );
}
 
export default Produtos;