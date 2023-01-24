import React from 'react';
import no_image from "./img/no-image.png"


import "./style/produto.css"

const Produto = ({produto}) => {

    return ( 
        <>  
            <div className="card">
                <img src={produto.img || no_image} alt={produto.nome} />

                <p>{produto.nome}</p>

                <ButtonCart produto={produto.cod}/>
            </div>
            
        </>
     );
}
 
export default Produto;