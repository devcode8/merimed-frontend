import React from 'react'
import Navbar from "../features/navbar/Components/Navbar";
import AdminOrders from '../features/Admin/Components/AdminOrders';

const AdminOrdersPage = () => {
  return (
    <>
    <Navbar>
        <AdminOrders/>
    </Navbar>
    </>
  )
}

export default AdminOrdersPage