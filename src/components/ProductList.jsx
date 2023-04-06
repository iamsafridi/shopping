import { useState, useEffect } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);

  const fetchProductData = () => {
    fetch("https://microdeft.rifatewu.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      });
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
      {products.length > 0 && (
        <ul>
          {products.map((product) => (
            <section className="hero" key={product.product_id}>
              <img src={product.image} alt="" />
              <h1 className="hero-title">{product.name}</h1>
              <p className="hero-description">{product.meta_description}</p>
              <p className="hero-text">{product.price}</p>
            </section>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;
