import React, { useEffect } from "react";

const index = () => {
  const fetchProducts = async () => {
    const resProducts = await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => products);

    console.log("Products", resProducts);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      Bismillah. welcome to al muharami
      <p>In progress</p>
    </div>
  );
};

export default index;
