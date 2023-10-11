import React from "react";
import ProductDetail from "../features/product/Components/ProductDetail";
import Navbar from "../features/navbar/Components/Navbar";

const ProductDetailPage = () => {
  return (
    <>
      <Navbar>
        <ProductDetail />
      </Navbar>
    </>
  );
};

export default ProductDetailPage;
