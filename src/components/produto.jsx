import React from 'react';
import Button from './button';
import no_image from "./img/no-image.png"


import "./style/produto.css"

const Produto = ({produto}) => {

    return ( 
        <>  
            <div className="card">
                <img src={produto.img || no_image} alt={produto.nome} />

                <p>{produto.nome}</p>
                
                <Button produto={produto.cod}/>
            </div>
            
        </>
     );
}
 
export default Produto;