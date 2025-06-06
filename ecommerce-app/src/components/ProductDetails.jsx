import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Carregando detalhes...</p>;
  if (error || !product) return <p>Erro ao carregar detalhes.</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>{product.title}</h2>
      <img src={product.images?.[0]} alt={product.title} width="300" />
      <p><strong>Preço:</strong> ${product.price}</p>
      <p><strong>Categoria:</strong> {product.category.name}</p>
      <p><strong>Descrição:</strong> {product.description}</p>
      <br />
      <Link to="/">← Voltar</Link>
    </div>
  );
}

export default ProductDetails;
