import React from "react";
import Navbar from "../features/navbar/Components/Navbar";
import Category from "../features/catagory/Components/Category";
import ProductList from "../features/product/Components/ProductList";

const HomePage = () => {
  return (
    <div>
      <Navbar>
        <ProductList />
      </Navbar>
    </div>
  );
};

export default HomePage;
