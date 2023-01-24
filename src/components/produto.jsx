import React from 'react';
import no_image from "./img/no-image.png"

import "./style/produto.css"

const Produto = ({produto}) => {

    return ( 
        <>  
            <div className="card">
                <img src={produto.img || no_image} alt="Imagem do produto" />

                <p>{produto.nome}</p>
            </div>
            
        </>
     );
}
 
export default Produto;