import React from "react";
import Navbar from "../features/navbar/Components/Navbar";
import ProductList from "../features/product/Components/ProductList";

const ShopPage = () => {
  return (
    <>
      <Navbar>
          <ProductList />
      </Navbar>
    </>
  );
};

export default ShopPage;
