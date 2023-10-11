import React from "react";
import Navbar from "../features/navbar/Components/Navbar";
import AdminProductDetail from "../features/Admin/Components/AdminProductDetail";

const AdminProductDetailPage = () => {
  return (
    <>
      <Navbar>
        <AdminProductDetail />
      </Navbar>
    </>
  );
};

export default AdminProductDetailPage;
