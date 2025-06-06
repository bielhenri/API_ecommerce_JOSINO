import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao buscar produtos");
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => {
        console.error(err);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar produtos.</p>;

  return (
    <div className="App">
      <h1><center>Loja Virtual</center></h1>
      <Routes>
        {/* Página principal com a lista de produtos */}
        <Route path="/" element={<ProductList products={products} />} />

        {/* Página de detalhes do produto */}
        <Route path="/produto/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
