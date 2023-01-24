import './App.css';
import Header from './components/header';
import { useState } from 'react';
import Produtos from './components/produtos';

function App() {
  const [produtos, setProdutos] = useState([
    {
      cod: 1,
      img: "",
      nome: "Óleo de Soja",
      categoria: "Óleos/Azeites",
      preco: 8.99,
      estoque: 10,
    },
    {
      cod: 2,
      img: "",
      nome: "Arroz 5Kg",
      categoria: "Grãos",
      preco: 21.80,
      estoque: 3,
    },
    {
      cod: 3,
      img: "./img/trakinas.jpg",
      nome: "Bol. Recheada Trakinas choc preto",
      categoria: "Bolachas/Biscoitos",
      preco: 3.15,
      estoque: 20,
    }
  ]);

  return (
    <div className="App">
      <Header/>
      <Produtos produtos={produtos}/>
    </div>
  );
}

export default App;