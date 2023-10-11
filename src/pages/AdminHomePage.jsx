import React from "react";
import Navbar from "../features/navbar/Components/Navbar";
import AdminProductList from "../features/Admin/Components/AdminProductList";

const AdminHomePage = () => {
  return (
    <div>
      <Navbar>
        <AdminProductList />
      </Navbar>
    </div>
  );
};

export default AdminHomePage;
