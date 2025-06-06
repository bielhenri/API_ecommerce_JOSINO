import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
    const navigate = useNavigate();
      

  return (
    <div className="product-card">
      <img src={product.images[0]} alt={product.title} />
      <h2>{product.title}</h2>
      <p>Categoria: {product.category.name}</p>
      <p>Preço: ${product.price}</p>
      <button onClick={() => navigate(`/produto/${product.id}`)}>Ver mais</button>
    </div>
  );
}

export default ProductCard;
