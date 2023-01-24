import React from 'react';
import no_image from "./img/no-image.png"

import "./style/produto.css"

const Produto = ({produto}) => {
    let image = require(produto.img);

    return ( 
        <>  
            <div className="card">
                <img src={image || no_image} alt="Imagem do produto" />

                <p>{produto.nome}</p>
            </div>
            
        </>
     );
}
 
export default Produto;